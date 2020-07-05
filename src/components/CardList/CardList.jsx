import React, { Component } from 'react';
import Card from "../Card";
import styles from "./CardList.module.scss"

export default class CardList extends Component {

    getBeers = () => {
        return this.props.beers
        .filter((beer) => beer.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
        .map(beer => <Card key={beer.id} beer={beer} />)
    }

    filterBeers = () => {
        return this.props.beers
        .filter((beer => 
            this.props.checkedValue === "abv" && beer.abv > 6 || 
            this.props.checkedValue === "classic" && beer.first_brewed.slice(-4) < 2010 || 
            this.props.checkedValue == "acidic" && beer.ph < 4))
        .map(beer => <Card key={beer.id} beer={beer} />)
    }

    render() { 
        return ( 
            <section className={styles.cardList}>
                {this.props.isChecked ? this.filterBeers() : this.getBeers()}
            </section>
        );
    }
}