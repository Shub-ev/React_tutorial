import React, { Component } from "react";

export default class Class_03 extends Component{
    constructor(){
        super();

        this.state = { // this function initializes the satate for the current  class component
            name : "Shubham"
        }
    }

    render(){
        return(  // render is the only required method in the class component
            <div>
                <h2>Hello {this.state.name}</h2>
            </div>
        )

        // when called it should examine this.state and this.props and should return on of following 
        // a. react element (e.x. created using JSX)
        // b. array and fragements 
    }
}