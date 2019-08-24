import React, { Component } from 'react';

// import { dimensions } from '../base_styles';

export default class Cart extends Component {
    render() {
        return (
            <div>
                <h1>Cart: {this.props.cart.length}</h1>
            </div>
        );
    }
}