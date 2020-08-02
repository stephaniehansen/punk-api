import React, { Component } from 'react';
import styles from "./NavBar.module.scss"
import logo from "../../assets/logo.png";

import SearchBox from "../SearchBox";
import FiltersList from "../FiltersList";

export default class NavBar extends Component {   
    render() { 
        return ( 
            <section className={styles.sideNav}>
                <div class={styles.logo}>
                    <img src={logo} />
                </div>
                <SearchBox placeholder="Search..." handleChange={this.props.handleChange} />
                <FiltersList filters={this.props.filters} handleChecked={this.props.handleChecked}/>
            </section>
         );
    }
}