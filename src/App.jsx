import { useEffect, useState } from "react"

const App = () => {

  const [count,setCount] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
       setCount(count=>count+1);   //  The issue here was that the count directly jumped from 0 to 2.

                                       // This happened because we are using StrictMode, which causes functions to run an additional time for development checks.

                                       // So, to fix it, we removed StrictMode from the main.js file.

                                             // There’s another problem: we are using setTimeout, but the count value keeps changing continuously.

                                             // This is happening because we didn’t use any dependency, so whenever any state changes, the effect runs again.

                                               // Here, since the count variable keeps updating, the update keeps running repeatedly.

    },2000);
  })
  return (
    <>

    <h1>I have rendered {count} times!</h1>
     

      
    </>
  )
}

export default App
