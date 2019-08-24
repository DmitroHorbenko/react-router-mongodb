import React, {Component} from 'react';
//import "./ProductsList.css"
// import ProductsCard from "./ProductCard";

export default class ProductsList extends Component{
    render() {
        let productFilter = this.props.products.filter((product)=>(product.category === this.props.currentCategory))
        return (
            <ul>
                {productFilter.map((product)=>
                    (<p key={product._id}>{this.props.currentCategory}
                    {/*<ProductsCard prod={product} />*/}
                        <button>
                            {product.brend} {product.model}
                        </button>
                    </p> ))}
            </ul>
        )
    }
}