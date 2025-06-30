import React, {   useState } from 'react'

const App = () => {

  //  const [brand,setBrand] = useState('Ferrari');
  //  const [model,setModel] = useState('Roma');
  //  const [year,setYear] = useState('2025');
  //  const [color,setColor] = useState('red');
  // const [car,setCar] = useState({
  //   brand:"Ferrari",
  //   color:"red",
  //   model:"Roma",
  //   year:"2025"
  // })

  // const changeColor = ()=>{
  //   setCar((prev)=>{
  //     return {...prev,color:"blue"}
  //   })    // we use previous value for updating
  // }
  const [counter,setCounter] = useState(0);
  const increaseCount = ()=>{
    setCounter((prev)=>{
      return prev+1;
    })
  }

  
  
  
  return (
    <>
       <h1>The counter value is {counter}</h1>
      <button onClick={increaseCount}>Increase Counter</button>

      
    </>
  )
}

export default App
