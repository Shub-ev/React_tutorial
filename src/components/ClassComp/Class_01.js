import React, { Component } from 'react';

class Class_01 extends Component { // class component is created by extending Component class

    constructor(){ // constructor for current class
        super() // constructor call to the parent

        this.state = {} // takes an object and which sets the states for instantiated object
    }

    render() {
        return (
            <div>
                <h2>This is a class component</h2>
            </div>
        )
    }
}

export default Class_01;