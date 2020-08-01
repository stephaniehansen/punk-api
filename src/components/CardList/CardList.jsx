import React, { Component } from 'react';
import Card from "../Card";
import styles from "./CardList.module.scss"

export default class CardList extends Component {
    getBeers = () => {
        const { filters, beers, searchTerm } = this.props;
        const checked = filters.filter(condition => condition.isChecked)
        .map(condition => condition.value);

        const results = beers.filter(beer => beer.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(beer => checked.includes("abv") ? beer.abv > 6 : beer)
        .filter(beer => checked.includes("classic") ? beer.first_brewed.slice(-4) < 2010 : beer)
        .filter(beer => checked.includes("acidic") ? beer.ph < 4 : beer)
        .map(beer => <Card key={beer.id} beer={beer} />)

        return results.length > 0 ? results : this.displayMsg();
    }

    displayMsg = () => {
        return <span className={styles.displayMsg}>No results to display...</span>
    }

    render() { 
        return ( 
            <section className={styles.cardList}>
                {this.getBeers()}
            </section>
        );
    }
}