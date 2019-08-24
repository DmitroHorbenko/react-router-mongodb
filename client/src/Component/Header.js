import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component{

    render() {
        return (
        // return <h1>Cart: {this.props.cart.length}</h1>
        <div>
            <Link to="/">
                Home
            </Link>
        </div>
        );
    }
}