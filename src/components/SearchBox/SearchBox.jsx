import React, { Component } from 'react';
import styles from "./SearchBox.module.scss"

export default class SearchBox extends Component {
    render() { 
        const { placeholder, handleChange } = this.props;
        return (
            <div className={styles.searchBox}>
                <input type="text" placeholder={placeholder} onChange={handleChange}/>
            </div>
         );
    }
}