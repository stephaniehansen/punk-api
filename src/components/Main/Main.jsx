import React, { Component } from 'react';

import CardList from "../CardList";

export default class Main extends Component {
    render() { 
        return ( 
            <>
            <CardList beers={this.props.beers} searchTerm={this.props.searchTerm} isChecked={this.props.isChecked} checkedValue={this.props.checkedValue}/>
            </>
         );
    }
}