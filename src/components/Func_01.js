import React from 'react';

export default function Func_01() { //this is an default export i.e. this fuction can be imported as any name
    return(
        <div>
            <h2>This is a type of function</h2>
        </div>
    )
}

export const Func_001 = () => { // this is a named export so while import named import should be done 
    return(
        <div>
            <h2>
                This is a named export
            </h2>
        </div>
    )
}