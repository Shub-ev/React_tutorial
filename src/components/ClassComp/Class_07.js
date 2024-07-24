//event handling using class component

import React, { Component } from 'react'

export default class Class_07 extends Component {
    // constructor(){
    //     super(); // constructor call for base class

    //     this.state = { //creating a state
    //         count : 0,
    //     }
    // }

    handleClick1 = () => {
        // this.setState({
        //     count : this.state.count + 1,
        // });
        console.log(this);
    }

    // handleClick2 = () => {
    //     this.setState({
    //         count : this.state.count + 1,
    //     },
    //     () => {
    //         console.log("Clicked: " + this.state.count); //set state also takes a call back function which holds the 
    //         // things to do once state is updated
    //     }
    //     )
    // }

    render() {
        return (
            <div>
                Button events count : 
                <button onClick={this.handleClick1}>Click</button>

                {/* <button onClick={() => this.handleClick2()}>Click</button>    ***********This is inefficient*********/}

                
            </div>
        )
    }
}
