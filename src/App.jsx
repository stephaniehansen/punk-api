import React, { Component } from 'react';
import './App.module.scss';

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import beers from "./data/beers";

export default class App extends Component {
  state = {
    searchTerm: "",
    isChecked: false,
    checkedValue: "",
    filters: [
        {
          value: "abv",
          label: "High ABV (> 6.0%)"
        },
        {
          value: "classic",
          label: "Classic Range"
        },
        {
          value: "acidic",
          label: "Acidic (< 4)"
      }
    ]
  }

  handleChange = (e) => this.setState({searchTerm: e.target.value})
  handleChecked = (e) => this.setState({isChecked: e.target.checked, checkedValue: e.target.value})

  render() {
    return (
      <main>
        <NavBar filters={this.state.filters} handleChange={this.handleChange} handleChecked={this.handleChecked}/>
        <Main beers={beers} searchTerm={this.state.searchTerm} isChecked={this.state.isChecked} checkedValue={this.state.checkedValue} />
      </main>
    )
  }
}