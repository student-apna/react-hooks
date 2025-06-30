import React, {  useState } from 'react'

const App = () => {

  //  const [brand,setBrand] = useState('Ferrari');
  //  const [model,setModel] = useState('Roma');
  //  const [year,setYear] = useState('2025');
  //  const [color,setColor] = useState('red');
  const [car,setCar] = useState({
    brand:"Ferrari",
    color:"red",
    model:"Roma",
    year:"2025"
  })

  const changeColor = ()=>{
    setCar((prev)=>{
      return {...prev,color:"blue"}
    })    // we use previous value for updating
  }
  
  
  return (
    <>
      <h1>My {car.brand}</h1>
      <h2>It is a {car.color} {car.model} from {car.year}</h2>
      <button onClick={changeColor}>Blue</button>

      
    </>
  )
}

export default App
