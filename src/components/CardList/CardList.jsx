import React, { Component } from 'react';
import Card from "../Card";

export default class CardList extends Component {

    getBeers = () => this.props.beers.map(beer => <Card beer={beer} />);

    render() { 
        return ( 
            <>
                {this.getBeers()}
            </>
          );
    }
}