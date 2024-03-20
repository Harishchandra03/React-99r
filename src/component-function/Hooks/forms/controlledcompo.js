import { useState } from "react"




const ControlledComponent=()=>{
    const[username,setUsername]=useState("")

    const usernamehandler=(event)=>{
        setUsername(event.target.value)
        console.log("user typing")
       
    }

    const[password,setPassword]=useState("")

    const PasswordHanler=(event)=>{
        setPassword(event.target.value)
        console.log("Password typing")

    }
    const Submithandler=(event)=>{
        event.preventDefault()
           let userInfo={
            username:username,
            password:password
           }
           console.log(userInfo)
    }
    return(
        <>
         <form onSubmit={Submithandler}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                        value={username}
                        onChange={usernamehandler}
                        
                    />
                   { username.length > 5
                   ?
                    <h6 style={{color:"red"}}>Username must be Less than 5 Characters</h6>:null
                   }
                    </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">
                        Password:
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Enter password"
                        name="pswd"
                        value={password}
                        onChange={PasswordHanler}
                        
                    />
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" />{" "}
                        Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        
        </>
    )
}

export default ControlledComponent