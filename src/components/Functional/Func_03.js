//destructuring prop in functional component

import React from 'react'

const Func_03 = ({name, surname}) => {
    // const {name, surname} = props;   this is also a method

    return (
        <h2>Hello func {name} {surname}</h2>
    )
}

export default Func_03