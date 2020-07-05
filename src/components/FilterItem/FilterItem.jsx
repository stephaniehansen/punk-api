import React, { Component } from 'react';

export default class FilterItem extends Component {
    render() {
        const { id, label, value, handleChecked } = this.props;

        return ( 
            <div>
                <label htmlFor={id}>{label}</label>
                <input type="checkbox" id={id} value={value} onClick={handleChecked} />
            </div>
         );
    }
}