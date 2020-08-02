import React, { Component } from 'react';
import styles from "./Card.module.scss"

export default class Card extends Component {
    shortenDescription = (description) => {
        return description.length < 190
            ? description
            : description.substring(0, description.lastIndexOf(".", 190)) + ".";
    }
    
    render() {
        const { name, description, abv, image_url } = this.props.beer;
        return (
            <div className={styles.card}>
                <img src={image_url} alt={name} />
                <div class={styles.name}>
                    <h2>{name.split('-')[0]}</h2>
                </div>
                <span>ABV {abv}%</span>
                <p>{this.shortenDescription(description)}</p>
            </div>
          );
    }
}