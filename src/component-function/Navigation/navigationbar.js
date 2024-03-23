import { Link } from "react-router-dom"


const NavigationBar=()=>{
    return(
        <>
        <nav className="navbar navbar-inverse"  >
  <div className="container-fluid">
    
    <ul className="nav navbar-nav"  >
      <li className="active" style={{display:"inline-block",listStyle:"none",margin:"10"}} >
        <Link to={"/"}>Home</Link>
      </li>
      <li style={{display:"inline-block",listStyle:"none",margin:"10"}} >
        <Link to={"/About"}> About</Link>
      </li>
      <li style={{display:"inline-block",listStyle:"none",margin:"10"}} >
        <Link to={"/Contact"}>Contact</Link>
      </li>
      <li style={{display:"inline-block",listStyle:"none",margin:"10"}} >
        <Link to={"/Setting"}>Settings</Link>
      </li>
    </ul>
  </div>
</nav>

        </>
    )
}

export default NavigationBar