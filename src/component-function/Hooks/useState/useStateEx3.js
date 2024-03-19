import { useState } from "react"


const UsesateEx3 =()=>{
    const[fruits,setFruits]=useState(["Apple","Mango","Banana"])

    const FruitHandler=()=>{
        const newList=[...fruits,"New Fruit"]
        setFruits(newList)
    }
 const RemoveFruit=()=>{
    const newList=fruits.slice(0,-1)
      setFruits(newList)
    }
   
    return(
        <>
        <h2>Fruits List</h2>
        <button onClick={FruitHandler}>Add NewFruit</button>
        <button onClick={RemoveFruit}>Remove Fruit</button>
        <ol>
        {
            fruits.map(eachfruit=><li>{eachfruit}</li>)
        }
        </ol>
        </>
    )
}
export default UsesateEx3