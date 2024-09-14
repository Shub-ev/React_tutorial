import React, { Children } from 'react'

// here we will try legacy code **** Children.count()/Children ****

const Func_08 = ({children}) => {
  return (
    <div>
        <h1>Total received childrens are {Children.count(children)}</h1>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Func_08