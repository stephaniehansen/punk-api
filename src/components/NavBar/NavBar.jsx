import React, { Component } from 'react';

import SearchBox from "../SearchBox";

export default class NavBar extends Component {
    render() { 
        return ( 
            <nav>
                <SearchBox placeholder="Search..."/>
            </nav>
         );
    }
}