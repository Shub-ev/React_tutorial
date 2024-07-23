//create react element using React.createElement()

import React, { Component } from "react";

export default class Class_02 extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "text",
        id: "id",
      },
      React.createElement("h1", null, "This is a text")
    ); //another method create element instead of jsx
    //syntax: createElement(type, props, ...children)
  }
}

/*
Parameters 

    type: 
    The type argument must be a valid React component type. For example, it could be a tag name string 
    (such as 'div' or 'span'), or a React component (a function, a class, or a special component like Fragment).

    props: 
    The props argument must either be an object or null. If you pass null, it will be treated the same as 
    an empty object. React will create an element with props matching the props you have passed. Note that ref and 
    key from your props object are special and will not be available as element.props.ref and element.props.key on 
    the returned element. They will be available as element.ref and element.key.

    optional ...children: 
    Zero or more child nodes. They can be any React nodes, including React elements, strings, 
    numbers, portals, empty nodes (null, undefined, true, and false), and arrays of React nodes.

*/