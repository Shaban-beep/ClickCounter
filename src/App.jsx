import React, { useState } from 'react'
import Products from './Products'
function App() {
  // const username = "chai and code"
  // let  counter = 15;
  let [counter,setCounter] = useState(15);
  // counter value ly ga as a variable,lekin setCounter value ko update kary ga

  const addValue = () => {
    // console.log("Clicked", Math.random());
    if(counter<=20){
    counter = counter + 1
    setCounter(counter)
    console.log("Clicked", counter);
    }
  }
  const removeValue = () => {
  //   // console.log("Clicked", Math.random());
    if(counter>=1){
    counter = counter - 1
    setCounter(counter); // ye value ko sirf update kary ga
    console.log("Clicked", counter);
    }
  }
  return (
    <div>
      {/* <h1>Chai and React {username}</h1>  */}
      {/* ye {username} ko expression kaha jata he aur ye end-stage javascript inject krny k liye use hota he */}
      {/* <Products naam="rag" data={{age:21, name:"Shaban Basra"}}/> */}
      <h1 className=''>Chai and React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button><br/>
      {/* ye button mn counter ki value update ni ho rahi to value update k liye hooks use hon gi */}
      <button onClick={removeValue}>Remove Value {counter}</button>
    </div>
)
}

export default App
// intellisence
//devui