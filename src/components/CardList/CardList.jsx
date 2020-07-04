import React, { Component } from 'react';
import Card from "../Card";
import styles from "./CardList.module.scss"

export default class CardList extends Component {

    getBeers = () => {
        return this.props.beers
        .filter((beer) => beer.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
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