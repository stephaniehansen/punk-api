import React, { Component } from 'react';
import './App.module.scss';

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import beers from "./data/beers";

export default class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <Main beers={beers}/>
      </main>
    )
  }
}