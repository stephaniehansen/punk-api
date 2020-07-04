import React, { Component } from 'react';
import styles from "./Card.module.scss"

export default class Card extends Component {
    render() {
        const { name, description, image_url } = this.props.beer;
        return (
            <div className={styles.card}>
                <img src={image_url} alt={name} />
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
          );
    }
}