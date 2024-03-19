import { useEffect } from "react"






const UsesateEx3 =()=>{
    const[fruits,setFruits]=useState(["Apple","Mango","Banana"])
    return(
        <>
        <h2>Fruits List</h2>
        <ol>
        {
            fruits.map(eachfruit=><li>{eachfruit}</li>)
        }
        </ol>
        </>
    )
}
export default UsesateEx3