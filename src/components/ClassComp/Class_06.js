// destructuring the props and state

import React, { Component } from 'react'

export class Class_06 extends Component {
    constructor(){
        super();

        this.state = {
            name : "shubham",
            surname : "gharage"
        }
    }

    render() {
        //const {name, surname} = this.props; //destructure/unpack the prop object
        const {name, surname} = this.state;

        return (
            <h2>Hello {name} {surname}</h2>
        )
    }
}

export default Class_06