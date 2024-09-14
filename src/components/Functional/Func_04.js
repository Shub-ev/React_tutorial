import React from 'react'

const Func_04 = () => {
    function handleClick() {  // event handler function 
        console.log("This is a message");
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button> {/* event handler */}
        </div>
    )
}

export default Func_04