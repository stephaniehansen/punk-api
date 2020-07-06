import React, { Component } from 'react';
import FilterItem from "../FilterItem";
import styles from "./FiltersList.module.scss"

export default class FiltersList extends Component {
    getFilterJsx = (filter, index) => (
        <div key={index}>
            <FilterItem filter={filter} handleChecked={this.props.handleChecked} />
        </div>
    );

    render() { 
        return (
            <section className={styles.filtersList}>
                <h4>Filter by:</h4>
                {this.props.filters.map(this.getFilterJsx)}
            </section>
        );
    }
}