// react fragments are used to group number of childers and return as single without
// adding extra element to the DOM
// this increases the performance and avoids the complexities for different cases
// ex. building table from different tr and th

import React, { Component } from 'react'
export class Class_12 extends Component {
    constructor(){
        super();

        this.state = {
            nm : ['Shubham', "Mahesh", `Gharage`],
        }
    }
    render() {
        return (
            //   ********    01    ********
            //   <h1>This is a text</h1>
            //   <span>this is also a text</span>
            // this is now allowed because here we should return only single JSX element


            //   ********    02    ********
            // <div>
            //     <h1>This is a text</h1>
            //     <span>this is also a text</span>
            // </div>
            // this works but here it adds extra div tag in the DOM

            //   ********    03    ********
            // to avoid both the issues we use react fragement which also acts as parent element i.e. hold all the child elements as one
            // <>  // in this technique we cannit pass key attribute
            //     <div>
            //         <h1>This is a text</h1>
            //         <span>this is also a text</span>
            //     </div>
            // </>

            // or 

            <React.Fragment>
                <div>
                    <h1>This is a text</h1>
                    <span>this is also a text</span>
                </div>
            </React.Fragment>

            //we can return multiple elements from .map also
        )
    }
}

export default Class_12