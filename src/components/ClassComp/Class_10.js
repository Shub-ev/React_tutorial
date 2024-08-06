// component life cycle methods 
// 1.Mounting   2.Updating   3.UnMounting   4.ErrorHandling


//1. Mounting methods
// These methods are called in the following order when an instance of a component is being created and inserted into the DOM
// A. constructor()
// B. getDrivedStateFromProps()
// C. render()  // only required method in the class component
// d. componentDidMount()

// In React, a side effect is any action that occurs outside the scope of a component's rendering process and affects something 
// external to the component. These actions can include:
// A. Data fetching: Making API calls to retrieve data from external sources.
// B. DOM manipulation: Directly interacting with the DOM outside of React's rendering process.
// C. Subscriptions: Setting up listeners for events, such as websockets or timers.
// D. Updating global state: Modifying variables or state outside of the component's local scope.

import React, { Component } from 'react'
import Class_10_child from './Class_10_child';

export class Class_10 extends Component {


    // ********  01  ******** constructor method is first method in component mounting life cycle

    // constructor method is called when new component is being created
    // used to initialize the state of the component or bind the event handlers
    // ****  do not cause side effects(e.g. calling http request from constructor)  ****
    constructor(props) {
        super(props);  // super mthod is used to initialize the base class and by passing props to super we can use the props

        this.state = { // this can be only done in constructor else where we have to use setState()
            name: this.props.name,
        }

        console.log("Component Parent Constructor() Executed");
    }


    // used when components states changes with parameters
    static getDerivedStateFromProps(props, state){ // ****  do not cause side effects(e.g. calling http request from getDerivedStateFromProps)  ****
        console.log("Component Parent getDerivedStateFromProps() Executed");
        return null;
    }

    componentDidMount(){ //this method is called only once in whole life cycle 
        // this is invoked imidiately after a component and all its children components have been rendered to the DOM
        // this is best place perform side effect by (DOM manipulation and making ajax requests)
        console.log("Component Parent componentDidMount() Executed");
    }


    // in this method do not change the state or interact with DOM or make ajax calls
    render() { // only required in class componenst
        console.log("Component Parent render() Executed");  
        return (
            <div>
                <Class_10_child/>
            </div>
        )
    }
}

export default Class_10