import React, { Component } from 'react';
import Card from "../Card";
import styles from "./CardList.module.scss"

export default class CardList extends Component {
    getBeers = () => {
        const checked = this.props.filters.filter(filter => filter.isChecked)
        .map(filter => filter.value);
        const keep = true;

        return this.props.beers
        .filter(beer => beer.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
        .filter(beer => checked.includes("abv") ? beer.abv > 6 : keep)
        .filter(beer => checked.includes("classic") ? beer.first_brewed.slice(-4) < 2010 : keep)
        .filter(beer => checked.includes("acidic") ? beer.ph < 4 : keep)
        .map(beer => <Card key={beer.id} beer={beer} />)
    }

    render() { 
        return ( 
            <section className={styles.cardList}>
                {this.getBeers()}
            </section>
        );
    }
}