// destructuring the props

import React, { Component } from 'react'

export class Class_06 extends Component {
    render() {
        const {name, surname} = this.props; //destructure/unpack the prop object

        return (
            <h2>Hello {name} {surname}</h2>
        )
    }
}

export default Class_06