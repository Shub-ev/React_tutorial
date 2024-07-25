// binding event handelers

// use case 03 or 04

import React, { Component } from 'react'

export default class Class_08 extends Component {
    constructor(){
        super()

        this.state = {
            message : "Hello Guest"
        }

        this.onClickHandler = this.onClickHandler.bind(this) // 03 methods in which we bind this keyword with onClickHandler 
        // so we don't have to bind it each and every time render occurs
    }

    // ************ 00 NOT WORK **************
    // onClickHandler(){
    //     console.log(this); //undefined
    //     this.setState({
    //         message : "Hello User",
    //     })
    // }

    // ************ 01 & 02 & 03 SAME AS BEFORE (used for .bind(this)) **************
    onClickHandler(){
        console.log(this);
        this.setState({
            message : "Hello User",
        })
    }

    onClickHandlerArrow = () => {   // 04 this is an arrow function which dont need this binding
        console.log(this);
        this.setState({
            message : "Hello User",
        })
    }

    render() {
        return (
        <div>
            <p>{this.state.message}</p>
            {/*  ************ 00 NOT WORK ************** */}
            {/* <button onClick={this.onClickHandler}>Click</button> ******** if we use this keyword in onClickHandler method
                by passing the same function to onClick event handler then this keyword will not work (will be undefined)
            */}


            {/*  ************ 01 ************** */}
            {/* <button onClick={this.onClickHandler.bind(this)}>Click</button> *********works fine but when re-rendering binding each
                time is unefficient so avoid */}

            {/*  ************ 02 ************** */}
            {/* <button onClick={() => this.onClickHandler()}>Click</button>  ******* here we use call back-function which invokes 
                onClickHandler */}

            {/*  ************ 03 ************** */}
            {/* <button onClick={this.onClickHandler}>Click</button>  ******just same as 00 but now we have binded this with onClickHandler 
                in class constructor*/}

            {/*  ************ 04 ************** */}
            <button onClick={this.onClickHandlerArrow}>Click</button>
        </div>
        )
    }
}
