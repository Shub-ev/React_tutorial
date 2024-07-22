import React from 'react'
import Func_01 from './components/Func_01' // default import from Func_01 which can be imported by any name
import { Func_02 } from './components/Func_02' //Func_02 is not default export hence it should be name specified

const App = () => {
  return (
    <div>
      <Func_01/>
      <Func_02/>
    </div>
  )
}

export default App