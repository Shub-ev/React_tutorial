import React from 'react'
import Func_01 from './components/Func_01' // default import from Func_01 which can be imported by any name
import { Func_02 } from './components/Func_02' //Func_02 is not default export hence it should be name specified
import Class_01 from './components/Class_01'
import Class_02 from './components/Class_02'
import Func_03 from './components/Func_03'

const App = () => {
  return (
    <div>
      <Func_01/> {/* Fuctional component */}
      <Func_02/>
      <Class_01/> {/* Class component */}
      <Class_02/>
      <Func_03 name="Shubham"/> {/* Passing props to the component */}
    </div>
  )
}

export default App