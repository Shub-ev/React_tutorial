import React from 'react'

const Func_03 = (props) => { // accepting props from parent
  return (
    <div>
        <h2>Hello {props.name}</h2> {/* using the props accepted from the parent */}
    </div>
  )
}

export default Func_03