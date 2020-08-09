import React, { Component } from 'react';
import styles from "./NavBar.module.scss"
import logo from "../../assets/logo.png";

import SearchBox from "../SearchBox";
import FiltersList from "../FiltersList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
library.add( faTimes, faBars );

export default class NavBar extends Component {
    state = {
        mobileMenu: false
    }

    toggleMenu = () => {
        this.setState({ mobileMenu: !this.state.mobileMenu })
    }

    getIcon = () => {
        return this.state.mobileMenu ? 
            <FontAwesomeIcon icon="times" /> : <FontAwesomeIcon icon="bars" />;
    } 

    render() { 
        return ( 
            <section className={styles.sideNav}>
                <span className={styles.mobileMenu} onClick={()=> this.toggleMenu()}>{this.getIcon()}</span>
                <div className={styles.navContent + (this.state.mobileMenu ? `${styles.show}` : "" )}>
                    <div class={styles.logo}>
                        <img src={logo} />
                    </div>
                    <SearchBox placeholder="Search..." handleChange={this.props.handleChange} />
                    <FiltersList filters={this.props.filters} handleChecked={this.props.handleChecked}/>
                </div>
            </section>
        );
    }
}