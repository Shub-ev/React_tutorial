import React, { Component } from "react";

export default class Class_03 extends Component{
    constructor(){
        super();

        this.state = {
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