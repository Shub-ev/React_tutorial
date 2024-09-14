import React from 'react'
import Class_13_Child from './Class_13_Child'
import Class_13_Pure from './Class_13_Pure'

// pure component

export default class Class_13_Parent extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "Shubham",
        }
    }

    // shouldComponentUpdate(Props, State){        // this avoids rerendering of parent component
    //     return this.state.name !== State.name;
    // }

    componentDidMount(){
        setInterval(() => {     // call function after each mentioned interval
            this.setState({     // this updates the state and shouldComponentUpdate is called in childrens
                name : "Harish",
            })
        }, 2000);
    }

    render() {
        return (
            <div>
                <Class_13_Child name = {this.state.name}/>
                <Class_13_Pure name = {this.state.name}/>
            </div>
        )
    }
}