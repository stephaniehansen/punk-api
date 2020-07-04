import React, { Component } from 'react';

export default class Card extends Component {
    render() {

        const { name, description, image_url } = this.props.beer;
        return (
            <>
                <img src={image_url} alt={name} />

                <h2>{name}</h2>
                <p>{description}</p>
            </>
          );
    }
}