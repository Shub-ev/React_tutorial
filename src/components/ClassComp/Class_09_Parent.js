// methods as props PARENT

import React, { Component } from 'react'
import Func_05_Child from '../Functional/Func_05_Child';

export default class Class_09_Parent extends Component {

    constructor(){
        super();

        this.state = {
            count : 0,
        }

        this.incr = this.incr.bind(this);
    }

    incr(message){
        this.setState({
            count : this.state.count + 1,
        }, () => {
            console.log("Count is : " + this.state.count);
            alert(message); 
        });
    }

    render() {
        return (
            <div>
                <Func_05_Child count={this.state.count} func={this.incr}/>
            </div>
        )
    }
}
