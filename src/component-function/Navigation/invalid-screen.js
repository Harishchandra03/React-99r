import React from 'react'
import { useNavigate } from 'react-router-dom'

function InvalidScreenCompo() {
const navigate=useNavigate()
   const Invalid=()=>{
         navigate("/")
   }
  return (
    <div>
<h1>404 ERROR</h1>
<h3>Something went wrong </h3>
<button onClick={Invalid}>Click here go home page</button>

    </div>
  )
}

export default InvalidScreenCompo