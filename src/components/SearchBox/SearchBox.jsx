import React, { Component } from 'react';

export default class SearchBox extends Component {
    render() { 
        const { placeholder } = this.props;
        return ( 
            <input type="text" placeholder={placeholder}/>
         );
    }
}