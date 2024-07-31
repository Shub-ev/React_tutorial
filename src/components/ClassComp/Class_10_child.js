import React, { Component } from 'react'

export class Class_10_child extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name : "child",
        }

        console.log("Component child Constructor() Executed");
    }

    static getDerivedStateFromProps(props, state){
        console.log("Component child getDerivedStateFromProps() Executed");
        return null;
    }

    componentDidMount(){ 
        console.log("Component child componentDidMount() Executed");
    }

    render() {
        console.log("Component child render() Executed");
        return (
            <div>Class_10_child</div>
        )
    }
}

export default Class_10_child