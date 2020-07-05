import React, { Component } from 'react';

export default class FilterItem extends Component {
    render() {
        const { id, label, value } = this.props.filter;

        return ( 
            <div>
                <label htmlFor={id}>{label}</label>
                <input type="checkbox" id={id} value={value} onClick={this.props.handleChecked} />
            </div>
         );
    }
}