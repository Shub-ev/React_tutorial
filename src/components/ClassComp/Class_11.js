// 2. Updating lifecycle methods
// An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered

// execution sequence
// A. static getDerivedStateFromProps()
// B. static shouldComponentUpdate()
// C. render()
// D. getSnapshotBeforeUpdate()
// E. componentDidUpdate()   // here we can make sideeffeects


import React, { Component } from 'react'

export class Class_11 extends Component {
  constructor(props){
    console.log("In constructor()");
    super(props);

    this.state = {
      name : "User",
    }
  }

  // ******   1   ******
  static getDerivedStateFromProps(props, state){
    console.log("In getDerivedStateFromProps()");
    return null;
  }

  // returns true or false on which should component re-reder or not is decided
  shouldComponentUpdate(nextProp, nextState){
    console.log("In shouldComponentUpdate()");
    // return false;
    return this.state.name !== nextState.name;
  }

  getSnapshotBeforeUpdate(prevProp, prevState){
    console.log("In getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(){
    console.log("In componentDidUpdate()");
  }

  changeState = () =>{
    this.setState({
      name : "Shubham",
    })
  }

  componentDidMount(){
    console.log("In componentDidMount()");
  }

  render() {
    console.log("in Render()");
    return (
      <>
        <h1>I am {this.state.name}</h1>
        <button onClick={this.changeState}>Click</button>
      </>
    )
  }
}

export default Class_11