import React, { Component } from 'react';
import styles from "./NavBar.module.scss"

import SearchBox from "../SearchBox";

export default class NavBar extends Component {   
    render() { 
        return ( 
            <section className={styles.sideNav}>
                <SearchBox placeholder="Search..." handleChange={this.props.handleChange}/>

                <div>
                    <label htmlFor="abv">High ABV (&gt; 6.0%)</label>
                    <input type="checkbox" id="abv"/>
                    <br />
                    <label htmlFor="classic">Classic Range</label>
                    <input type="checkbox" id="classic"/>
                    <br />
                    <label htmlFor="acidic">Acidic (&lt; 4)</label>
                    <input type="checkbox" id="acidic"/>
                </div>
            </section>
         );
    }
}