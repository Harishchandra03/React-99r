import axios from "axios"
import React, { useEffect, useState } from "react"
import ButtonExample from "../spinners"
import { Link } from "react-router-dom"


const AxiosCompo=()=>{
    const[Products,setProducts]=useState([])

    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products")
      .then((response)=>{
         setProducts(response.data)
      })

    },[])
    return(
        <>
        
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
            Products.length>0
            ?
            Products.map((product) => (
                <div key={product.id} style={{ width: 'calc(33.33% - 20px)', padding: '10px', boxSizing: 'border-box',border:"2px solid black"}}>
                    <img src={product.image} style={{ width: 200, height: 200 }} alt="Product" />
                    <h4>{product.title }</h4>
                    <h3>Category: {product.category}</h3>
                    <h3>Price: {product.price}</h3>
                    <Link to={`/${product.category}/${product.id}`}><button>Click to see product details</button></Link>
                </div>
            )):
            <ButtonExample/>
            }
        </div>
    </>
    )
}

export default AxiosCompo