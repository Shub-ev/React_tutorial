// pure component 
// instead of extending React.Component extend React.PureComponent

// here in pure components **** shallow comparison **** is done 
// 1. for primitive types => check if both types(number, stinrg) are same or not (if not re-render)
// 2. for non primitive => check if both vars are pointing to same obj. (if not re-render)

// shallow comparison happens berween
// 1. prevProps and currProps
// 2. prevState and currState

// hence pure components save unwanted re-renders

import React, { PureComponent } from 'react';

class Class_13_Pure extends PureComponent{
    render(){
        console.log("Pure Component Render!");
        return(
            <div>
                Name is {this.props.name}
            </div>
        )
    }
}

export default Class_13_Pure;