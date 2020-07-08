import React, { Component } from 'react';
import Card from "../Card";
import styles from "./CardList.module.scss"

export default class CardList extends Component {
    getBeers = () => {
        return this.props.beers
        .filter(beer => beer.name.toLowerCase()
        .includes(this.props.searchTerm.toLowerCase()))
        .map(beer => <Card key={beer.id} beer={beer} />)
    }

    filterBeers = (checked) => {
        return this.props.beers
        .filter(beer => {
            if (checked.includes("abv") ) {
                return beer.abv > 6;
            } else {
                return true;
            }
        }).filter(beer => {
            if (checked.includes("classic") ) {
                return beer.first_brewed.slice(-4) < 2010;
            } else {
                return true;
            }
        }).filter(beer => {
            if (checked.includes("acidic")) {
                return beer.ph < 4;
            } else {
                return true;
            }
        }).map(beer => <Card key={beer.id} beer={beer} />)
    }

    render() { 
        const checked = this.props.filters.filter(filter => filter.isChecked)
        .map(filter => filter.value);

        return ( 
            <section className={styles.cardList}>
                {checked.length < 1 ? this.getBeers() : this.filterBeers(checked)}
            </section>
        );
    }
}