import React, { Component } from 'react';

export default class SearchBox extends Component {
    render() { 
        const { placeholder, handleChange } = this.props;
        return (
            <input type="text" placeholder={placeholder} onChange={handleChange}/>
         );
    }
}