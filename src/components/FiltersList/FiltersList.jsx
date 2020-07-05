import React, { Component } from 'react';
import FilterItem from "../FilterItem";

export default class FiltersList extends Component {
    getFilterJsx = (filter, index) => (
        <div key={index}>
            <FilterItem filter={filter} handleChecked={this.props.handleChecked} />
        </div>
    );

    render() { 
        return (
            <section>
                {this.props.filters.map(this.getFilterJsx)}
            </section>
        );
    }
}