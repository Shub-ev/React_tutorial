import React from 'react'

const Func_03 = (props) => { // accepting props from parent
  return (
    <div>
        <span>Hello {props.name}</span> {/* using the props accepted from the parent */}
    </div>
  )
}

export default Func_03