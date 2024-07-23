import React, {Component} from 'react';

class Class_04 extends Component{
    constructor(props){  // pass props to constructor function 
        super(props); // pass props to super constructor
    }

    render(){
        return(
            <div>
                <h3>Using {this.props.name} and {this.props.surname}</h3>
                {this.props.children}
            </div>
        )
    }
}

export default Class_04;