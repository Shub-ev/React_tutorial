import React, { Component } from 'react';

export default class Try extends Component{
    constructor(props){
        super(props);
        console.log("In Constructor()");
        this.state = {
            name : "User",
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("In GetDerivedStateFromProps()");
        if(props.name != state.name){
            return { name: props.name }
        }
        return null;
    }

    componentDidMount(){
        console.log("In ComponentDidMount()")
        setTimeout(() => {
            this.setState({
                name : "Gharage",
            })
        }, 2000);
    }

    render(){
        console.log("In Render()")
        return(
            <h1>I am {this.state.name}</h1>
        )
    }
}