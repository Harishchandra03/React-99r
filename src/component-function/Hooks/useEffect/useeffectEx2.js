import axios from "axios"
import { useEffect, useState } from "react"
import ButtonExample from "../../spinners"



const UseEffectEx2 = () => {
    const [product, setProduct] = useState([])


    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
        setProduct(response.data)})
    },[])

    return (
        <>
            <h2>use effect example 2</h2>
            {
                 product.length>0
                 ?

                product.map((eachObject) => {
                    return (
                        
                        <>
                       
                          <img style={{width:100,height:100}} src={eachObject.image}></img>
                            <h4>{eachObject.title}</h4>
                         
                        </>
                    )
                })
                :
                <ButtonExample/>
            }
           
        </>
    )
}

export default UseEffectEx2