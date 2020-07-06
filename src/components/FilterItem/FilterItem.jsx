import React, { Component } from 'react';
import styles from "./FilterItem.module.scss"

export default class FilterItem extends Component {
    render() {
        const { id, label, value } = this.props.filter;

        return ( 
            <div className={styles.filterItem}>
                <label htmlFor={id}>{label}</label>
                <input type="checkbox" id={id} value={value} onClick={this.props.handleChecked} />
            </div>
         );
    }
}