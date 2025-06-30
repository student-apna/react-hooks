import React, { useState } from 'react'

const App = () => {
  const [color,setColor] = useState('Red');
  const favColor = ()=>{
   setColor('Blue')
  }
  return (
    <div>
      <h1>My Favourite color is {color}!</h1>
      <button onClick={favColor}>Blue</button>
    </div>
  )
}

export default App
