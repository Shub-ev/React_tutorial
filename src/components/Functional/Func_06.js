// conditional rendering 

import React from 'react'

const Func_06 = () => {
    const isLoggedIn = false;


    // ********  01  ******** This is conditional rendering using if....else blocks 
    //   if(a === 10){
    //     return <h2>a is 10</h2>
    //   }
    //   else{
    //     return <h2>a is not 10</h2>
    //   }


    // ********  02  ******** conditional rendering using ternary operator
    // return ((isLoggedIn == 10) ? (<h2>a is 10</h2>) : (<h2>a is not 10</h2>));


    // ********  03  ******** using short circuit operators 
    // return (isLoggedIn && <h2>User is logged in</h2>)

    // ********  04  ******** using element variable method (using variable as React element)
    // let element;
    // if(isLoggedIn){
    //     element = <h1>Yes</h1>
    // }
    // else{
    //     element = <h1>No</h1>
    // }
    // return element;
}

export default Func_06