import React from 'react'
import Func_01 from './components/Func_01' // default import from Func_01 which can be imported by any name
import { Func_001 } from './components/Func_01' //Func_02 is not default export hence it should be name specified
import Class_01 from './components/Class_01'
import Class_02 from './components/Class_02'
import Func_02 from './components/Func_02'
import Class_03 from './components/Class_03'
import Class_04 from './components/Class_04'
import Class_05 from './components/Class_05'
import Class_06 from './components/Class_06'
import Func_03 from './components/Func_03'

const App = () => {
  return (
    <div>
      {/* <Func_01/> Fuctional component */}
      {/* <Func_001/> */}
      {/* <Class_01/> {/* Class component */}
      {/* <Class_02/> */}
      {/* <Func_02 name="Batman" surname="Patil"/> Passing props to the component */}
      {/* <Func_02 name="Raju"><button>Button</button></Func_02> passing child component to a Custom component
      {/* <Class_03/> class  */}
      {/* <Class_04 name="Apple" surname="Sugar"><button>Click</button></Class_04> */}
      {/* <Class_05/> updating the state in the class */}
      {/* <Class_06 name="Shubham" surname="Gharage"/> class component implementing destructuring */}
      {/* <Func_03 name="Shubham" surname="Gharage"/> functional component implementing destructuring */}

      
    </div>
  )
}

export default App