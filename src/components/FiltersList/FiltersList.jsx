import React, { Component } from 'react';
import FilterItem from "../FilterItem";

export default class FiltersList extends Component {
    render() { 
        return (
            <div>
                {this.props.filters.map((checkbox, index) => {
                    return <FilterItem key={index} label={checkbox.label} value={checkbox.value} handleChecked={this.props.handleChecked} />
                })}
            </div>
        );
    }
}