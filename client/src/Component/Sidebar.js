import React, {Component} from 'react';

export default class Sidebar extends Component{
    render() {
        return (
            <ul>
                {this.props.categories.map((category)=>
                    (<p key={category._id}>{this.props.currentCategory}
                        <button onClick={() => {this.props.setCurrentCategory(category.title)}}>
                            {category.title}
                        </button>
                    </p> ))}
            </ul>
        )
    }
}