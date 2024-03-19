
import { useState } from "react"


const UseStateExample2=()=>{
    const[timer,setTimer]=useState(100)

    const handletimer=()=>{
        setInterval(()=>{
            setTimer(time=>time-1)
        },1000)

        
    }


    return(
        <>
        <h2>Timer</h2>
        <h3>Current Timer Value{timer}</h3>
        <button onClick={handletimer}>Start Timer</button>
        </>
    )
}

export default UseStateExample2