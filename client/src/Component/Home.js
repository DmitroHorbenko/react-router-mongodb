import React, {Component} from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import CartCounter from "./CartCounter";
import Sidebar from "./Sidebar";
import ProductsList from "./ProductsList";


    class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: [],
            currentCategory: "Notebook",
            cart: ["test"],
            intervalIsSet: false
        };
    }

    componentDidMount() {
        if (this.state.categories.length === 0) {
            this.getCategoryFromDb();
            // this.setState({currentCategory: this.props.categories[0].title})
        }
        this.getProductFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getCategoryFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    // never let a process live forever
    // always kill a process everytime we are done using it
    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    getCategoryFromDb = () => {
        fetch('http://localhost:3001/api/category')
            .then((data) => data.json())
            .then((data) => this.setState({categories: data}))
            .catch(err => {
                console.log("Failed Getting category")
            })


    };

    getProductFromDb = () => {
        fetch('http://localhost:3001/api/product')
            .then((res) => res.json())
            .then((res) => this.setState({products: res}))
            .catch(err => {
                console.log("Failed Getting product");
            })
    };

    setCurrentCategory = (value) => {
        this.setState({ currentCategory: value })
    };



    render() {
        return (
            <div>
                <div className={"cart"}><Link to={{
                     pathname: '/cart',
                     state: { cart: "test" }
                 }}>To Cart</Link></div>
                <div className={"cartCounter"}><CartCounter cart={this.state.cart}/></div>
                <div className={"sidebar"}><Sidebar categories={this.state.categories} setCurrentCategory={this.setCurrentCategory}/></div>
                <div className={"content"}><ProductsList products={this.state.products} currentCategory={this.state.currentCategory}/></div>
            </div>
        )
    }
}

export default Home