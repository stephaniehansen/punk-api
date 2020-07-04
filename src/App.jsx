import React, { Component } from 'react';
import './App.css';

import Card from "./components/Card";
import beers from "./data/beers"

export default class App extends Component {
  render() {
    return (
      <>
        <h1>Let's drink beer!</h1>
        {beers.map(beer => <Card beer={beer} />)}
      </>

    )
      
  }
}