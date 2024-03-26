import { Link } from "react-router-dom"


const NavigationBar=()=>{

  const LinkStyle={
    textDecoration:"none",
    color:"red",
  }

    const ListStyle={
      display:"inline-block",
      margin:"8px",
      fontSize:"25px"
    }
    return(
        <>
        <nav className="navbar navbar-inverse"  >
  <div className="container-fluid">
    
    <ul className="nav navbar-nav">
      <li className="active" style={ListStyle} >
        <Link to={"/"} style={LinkStyle} >Home</Link>
      </li>
      <li style={ListStyle} >
        <Link to={"/About"} style={LinkStyle} > About</Link>
      </li>
      <li style={ListStyle} >
        <Link to={"/Contact"} style={LinkStyle} >Contact</Link>
      </li>
      <li style={ListStyle} >
        <Link to={"/Setting"} style={LinkStyle} >Settings</Link>
      </li>
    </ul>
  </div>
</nav>

        </>
    )
}

export default NavigationBar