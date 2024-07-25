// destructuring the props and state

import React, { Component } from 'react'

export class Class_06 extends Component {
    // constructor(props){          this is traditional props passing to the constructor
    //     super(props);

    //     this.state = {
    //         name : "shubham",
    //         surname : "gharage"
    //     }
    // }

    render() {
        const {name, surname} = this.props; //destructure/unpack the prop object

        return (
            <h2>Hello {name} {surname}</h2> // now by destructuring we can use props without this binding
            // <h2>Hello {this.props.name} {this.props.surname}</h2> this is traditional method which accesss props as //this.props.name
        )
    }
}

export default Class_06