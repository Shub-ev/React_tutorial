import React, { Component } from "react";

export default class Class_03 extends Component{
    constructor(){
        super();

        this.state = { // this function initializes the satate for the current  class component
            name : "Shubham"
        }
    }

    render(){
        return(
            <div>
                <h2>Hello {this.state.name}</h2>
            </div>
        )
    }
}