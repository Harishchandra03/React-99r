import { useState } from "react"






const UseStateExample = () => {
    const[counter, setCounter] = useState(0)

    //This function is used to increase the current counter by 1
    const incre = () => {
        setCounter((count)=>{return count+1})
   }

   //This function used to decrease the current value by 1
   const decre=()=>{
       setCounter((count)=>{return count-1})
   }

   //This function is to reset the value
   const reset=()=>{
     setCounter(0
        )
   }
return (
    <>
        <h1>useState example</h1>
        <h2>Current counter value {counter}</h2>
        <button onClick={incre}>Increment</button>
        <button onClick={decre}>Decrement</button>
        <button onClick={reset}>Reset</button>

    </>
)
}

export default UseStateExample

//    useState ===> useState is hook which creates the state, and tracks the chnage in state in functional based components