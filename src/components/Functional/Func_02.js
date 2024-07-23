import React from 'react'

const Func_02 = (props) => { // accepting props from parent
  // props are immutable i.e. they can not be changed

  return (
    <div>
        <h2>Hello {props.name} {props.surname}</h2> {/* using the props accepted from the parent */}
        {/* props is an object which holdes multiple properties/values */}
        {props.children}
    </div>
  )
}

export default Func_02