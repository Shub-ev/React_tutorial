import React from 'react'
import Class_13_Child from './Class_13_Child'
import Class_13_Pure from './Class_13_Pure'

class Class_13_Parent extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "Shubham",
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                name : "Harish",
            })
        }, 2000);
    }

    render() {
        return (
            <div
                <Class_13_Child name = {this.state.name}/>
                <Class_13_Pure name = {this.state.name}/>
            </div>
        )
    }
}

export default Class_13_Parent;