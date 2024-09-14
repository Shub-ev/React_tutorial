//code to change the state of class component

import React, { Component } from 'react';

class Class_05 extends Component{
    // constructor binds this to the instance of the class
    constructor(){ //constructor of the current class
        super();   // constructor of the parrent class {Component}

        this.state = {   //setting the states
            message: "User",
        }

        this.handleClick = this.handleClick.bind(this); // we can explicitly bind this with methods
    }

    handleClick() {   //creating a custom function
        this.setState({
            message : "Shubham",
        })
    }

    render(){
        return(
            <div>
                <span>Hello {this.state.message}</span>
                <button onClick={() => this.handleClick()}>Click</button>
            </div>
        )
    }
}

export default Class_05;