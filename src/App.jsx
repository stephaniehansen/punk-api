import React, { Component } from 'react';
import './App.module.scss';

import NavBar from "./components/NavBar";
import Main from "./components/Main";

export default class App extends Component {
  state = {
    beers: [],
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

  fetchBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(data => {
      this.setState({
        beers: data
      })
    })
    .catch(error => console.log(error));
  }

  handleChange = (e) => this.setState({searchTerm: e.target.value})
  handleChecked = (filter, isChecked) => {
    const updateChecked = this.state.filters.map(condition => {
      if (condition.value === filter.value) condition.isChecked = isChecked;
      return condition; })
    this.setState({filters: updateChecked})
  } 

  componentDidMount() {
    this.fetchBeers();
  }

  render() {
    return (
      <main>
        <NavBar filters={this.state.filters} handleChange={this.handleChange} handleChecked={this.handleChecked}/>
        <Main beers={this.state.beers} searchTerm={this.state.searchTerm} filters={this.state.filters} />
      </main>
    )
  }
}