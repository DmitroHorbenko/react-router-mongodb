import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import ProductCard from "./Component/ProductCard";
// import Header from "./Component/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import {routes} from "./router";

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         products: [],
    //         categories: [],
    //         currentCategory: "Notebook",
    //         cart: [],
    //         intervalIsSet: false
    //     };
    // }

    // when component mounts, first thing it does is fetch all existing data in our db
    // then we incorporate a polling logic so that we can easily see if our db has
    // changed and implement those changes into our UI


    // // our put method that uses our backend api
    // // to create new query into our data base
    // putDataToDB = (title) => {
    //     let currentIds = this.state.data.map((data) => data.id);
    //     let idToBeAdded = 0;
    //     while (currentIds.includes(idToBeAdded)) {
    //         ++idToBeAdded;
    //     }
    //
    //     axios.post('http://localhost:3001/api/category', {
    //         title: title,
    //     });
    // };
    //
    // // our delete method that uses our backend api
    // // to remove existing database information
    // deleteFromDB = (idTodelete) => {
    //     parseInt(idTodelete);
    //     let objIdToDelete = null;
    //     this.state.data.forEach((dat) => {
    //         if (dat.id === +idTodelete) {
    //             objIdToDelete = dat._id;
    //         }
    //     });
    //
    //     axios.delete('http://localhost:3001/api/deleteData', {
    //         data: {
    //             id: objIdToDelete,
    //         },
    //     });
    // };
    //
    // // our update method that uses our backend api
    // // to overwrite existing data base information
    // updateDB = (idToUpdate, updateToApply) => {
    //     let objIdToUpdate = null;
    //     parseInt(idToUpdate);
    //     this.state.data.forEach((dat) => {
    //         if (dat.id === +idToUpdate) {
    //             objIdToUpdate = dat._id;
    //         }
    //     });
    //
    //     axios.post('http://localhost:3001/api/updateData', {
    //         id: objIdToUpdate,
    //         update: { message: updateToApply },
    //     });
    // };
    //
    // // here is our UI
    // // it is easy to understand their functions when you
    // // see them render into our screen
    render() {
        // const { categories } = this.state
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/product" component={ProductCard}/>
                    </Switch>
                </BrowserRouter>
            </div>
                // <section>
                //     <BrowserRouter>
                //         <div className={"header"}><Link to="/about"><Header cart={this.state.cart}/></Link></div>
                //         <div className={"sidebar"}><Sidebar categories={this.state.categories} setCurrentCategory={this.setCurrentCategory}/></div>
                //         <div className={"content"}><ProductsList products={this.state.products} currentCategory={this.state.currentCategory}/></div>
                //
                //             <Route path="/about" component={About} />
                //     </BrowserRouter>
                // </section>

    );
    }
}

// function About() {
//     return (
//         <div>
//             <h2>About</h2>
//         </div>
//     );
// }

export default App;