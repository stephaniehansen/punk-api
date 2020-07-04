import React, { Component } from 'react';
import Card from "../Card";
import styles from "./CardList.module.scss"

export default class CardList extends Component {

    getBeers = () => this.props.beers.map(beer => <Card key={beer.id} beer={beer} />);

    render() { 
        return ( 
            <section className={styles.cardList}>
                {this.getBeers()}
            </section>
          );
    }
}