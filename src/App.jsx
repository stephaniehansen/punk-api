import React, { Component } from 'react';
import './App.module.scss';

import NavBar from "./components/NavBar";
import CardList from "./components/CardList";
import beers from "./data/beers"

export default class App extends Component {
  state = {
    searchTerm: ""
  }

  render() {
    return (
      <main>
        <NavBar />
        <CardList beers={beers} />
      </main>
    )
  }
}