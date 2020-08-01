import React, { Component } from 'react';
import styles from "./NavBar.module.scss"

import SearchBox from "../SearchBox";
import FiltersList from "../FiltersList";

export default class NavBar extends Component {   
    render() { 
        return ( 
            <section className={styles.sideNav}>
                <div class={styles.logo}>
                    <h1>Brewdog</h1>
                </div>
                <SearchBox placeholder="Search..." handleChange={this.props.handleChange} />
                <FiltersList filters={this.props.filters} handleChecked={this.props.handleChecked}/>
            </section>
         );
    }
}