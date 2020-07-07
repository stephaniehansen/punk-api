import React, { Component } from 'react';
import './App.module.scss';

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import beers from "./data/beers";

export default class App extends Component {
  state = {
    searchTerm: "",
    filters: [
      { value: "abv",
        label: "High ABV (> 6.0%)",
        isChecked: false
      },
      { value: "classic",
        label: "Classic Range",
        isChecked: false
      },
      { value: "acidic",
        label: "Acidic (< 4)",
        isChecked: false
      }
    ]
  }

  handleChange = (e) => this.setState({searchTerm: e.target.value})
  handleChecked = (filter, isChecked) => {
    const updateChecked = this.state.filters.map(item => {
      if(item.value === filter.value){
        item.isChecked = isChecked;
      } return item;
    })
    this.setState({filters: updateChecked})
  } 

  render() {
    return (
      <main>
        <NavBar filters={this.state.filters} handleChange={this.handleChange} handleChecked={this.handleChecked}/>
        <Main beers={beers} searchTerm={this.state.searchTerm} filters={this.state.filters} />
      </main>
    )
  }
}