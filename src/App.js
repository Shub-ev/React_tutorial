import React, { useState } from 'react'
import Func_01 from './components/Functional/Func_01' // default import from Func_01 which can be imported by any name
import { Func_001 } from './components/Functional/Func_01' //Func_02 is not default export hence it should be name specified
import Class_01 from './components/ClassComp/Class_01'
import Class_02 from './components/ClassComp/Class_02'
import Func_02 from './components/Functional/Func_02'
import Class_03 from './components/ClassComp/Class_03'
import Class_04 from './components/ClassComp/Class_04'
import Class_05 from './components/ClassComp/Class_05'
import Class_06 from './components/ClassComp/Class_06'
import Func_03 from './components/Functional/Func_03'
import Func_04 from './components/Functional/Func_04'
import Class_07 from './components/ClassComp/Class_07'
import Try from './components/ClassComp/Try'
import Class_08 from './components/ClassComp/Class_08'
import Class_09_Parent from './components/ClassComp/Class_09_Parent'
import Func_06 from './components/Functional/Func_06'
import Class_10 from './components/ClassComp/Class_10'
import Class_12 from './components/ClassComp/Class_12'
import Func_07_Class_Parent from './components/Functional/Func_07_Class_Parent'
import Func_08 from './components/Functional/Func_08'
import Class_11 from './components/ClassComp/Class_11'
import Class_13_Parent from './components/ClassComp/Class_13_Parent'

const App = () => {
  const [name, setName] = useState("User");
  setTimeout(() => {
    setName("Shubham");
  }, 2000)
  return (
    <div>
      {/* <Func_01/> Fuctional component */}
      {/* <Func_001/> */}
      {/* <Class_01/> {/* Class component */}
      {/* <Class_02/> */}
      {/* <Func_02 name="Batman" surname="Patil"/> Passing props to the component */}
      {/* <Func_02 name="Raju"><button>Button</button></Func_02> passing child component to a Custom component */}
      {/* <Class_03/>  class  */}
      {/* <Class_04 name="Apple" surname="Sugar"><button>Click</button></Class_04> */}
       {/* <Class_05/> updating the state in the class */}
      {/* <Class_06 name="Shubham" surname="Gharage"/> class component implementing destructuring */}
      {/* <Func_03 name="Shubham" surname="Gharage"/> functional component implementing destructuring */}
      {/* <Func_04/> event handling in functional component */}
      {/* <Class_07/> event handling in class component */}
      {/* <Class_08/> event binding in class component */}
      {/* <Class_09_Parent/>  passing method as a prop and getting value from child to parent */}
      {/* <Func_06/> *  conditional rendering in react webpage */} 

      {/* <Class_10 name = "Shubham"/> */}
      {/* <Class_11 name={name}/> */}
      {/* <Class_12/>   this shows the react Fragment */}

      {/* <Try name={name}/> */}
      {/* <Class_13_Parent/>  this shows PureClassComponents */}
      {/* <Func_07_Class_Parent/> */}

      {/* <Func_08>   
        {null}
        {[1,2,3,5]}
        <></>
        This is used to pass the children to the functional component
        <h1>Children1</h1>
        <h2>Children2</h2>
      </Func_08> */}
    </div>
  )
}

export default App