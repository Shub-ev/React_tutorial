import React, { Component } from 'react'

export default class Try extends Component {

    handleClick() {
        console.log(this);
    }

    render() {
        return (
            <div>
                <button onClick={ this.handleClick }>Click</button>
            </div>
        )
    }
}
