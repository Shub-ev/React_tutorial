// pure component 
// instead of extending React.Component extend React.PureComponent

import React, { PureComponent } from 'react';

class Class_13_Pure extends PureComponent{
    render(){
        return(
            <div>
                Name is {this.props.name}
            </div>
        
    };
}

export default Class_13_Pure;