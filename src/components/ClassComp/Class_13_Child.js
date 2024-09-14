import React, { Component } from 'react'

// this is a child component to prent compo. hence if parent re-render this also re-renders 
// as in normal components shouldComponentUpdate() is true by default

export default class Class_13_Child extends Component {
  render() {
    console.log("Normal Component Render!");
    return (
      <div>Name is {this.props.name}</div>
    )
  } 
}