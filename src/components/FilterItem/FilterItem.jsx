import React, { Component } from 'react';
import styles from "./FilterItem.module.scss"

export default class FilterItem extends Component {
    state = {
        isChecked: false
    }

    toggleCheckbox = () => {
        this.props.handleChecked(this.props.filter, !this.state.isChecked);
        this.setState({ isChecked : !this.state.isChecked})
    }
    
    render() {
        const { id, label, value } = this.props.filter;

        return (
            <div className={styles.filterItem}>
                <label htmlFor={id}>{label}</label>
                <input type="checkbox" id={id} value={value} onClick={this.toggleCheckbox} />
            </div>
         );
    }
}