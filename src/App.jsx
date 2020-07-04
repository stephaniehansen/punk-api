import React, { Component } from 'react';
import './App.css';

import CardList from "./components/CardList";
import beers from "./data/beers"

export default class App extends Component {
  state = {
    searchTerm: ""
  }

  render() {
    return (
      <>
        <h1>Let's drink beer!</h1>
        <CardList beers={beers} />
      </>
    )
  }
}