// child for 09 PARENT

import React from 'react'

const Func_05_Child = ({count, func}) => {
  return (
    <div>
        <p>Count is : {count}</p>
        {/* <button onClick={func}>Click</button>  this is normal way to use parent function and update parent state */}

        <button onClick={(() => func("Thanks"))}>Click</button> {/* this method is used when you want to pass back the value to the 
            parent component through same function as a parameter */}
    </div>
  )
}

export default Func_05_Child