import { useEffect, useState } from "react"



const UseEffectEx3 = () => {
      const[X,setX]=useState(null)
      const[Y,setY]=useState(null)
    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            return (
               setX(event.screenX),
               setY(event.screenY)
            )
        })
    }, [])
    return (
        <>
            <h1>Use Effect example for Event Listreners</h1>
            <h2>X-Axis {X}</h2>
            <h2>Y-axis {Y}</h2>
        </>
    )
}
export default UseEffectEx3


