import React, { Component } from 'react';
import './App.module.scss';

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import beers from "./data/beers";

export default class App extends Component {
  state = {
    searchTerm: ""
  }

  handleChange = (e) => this.setState({searchTerm: e.target.value})

  render() {
    return (
      <main>
        <NavBar handleChange={this.handleChange}/>
        <Main beers={beers} searchTerm={this.state.searchTerm}/>
      </main>
    )
  }
}