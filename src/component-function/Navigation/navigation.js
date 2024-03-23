import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "./HomeScreen"
import ContactScreen from "./ContactScreen"
import AboutScreen from "./AboutScreen"
import SettingScreen from "./SettingScreen"





const NavigationComponent=()=>{
    return(
        <>

       
        <BrowserRouter>
        <Routes>
           <Route path="/" Component={HomeScreen} />
           <Route path="/Conatct" Component={ContactScreen} />
           <Route path="/About" component={AboutScreen} />
           <Route path="/Setting" Component={SettingScreen} />
            
        </Routes>
        
        </BrowserRouter>

        </>
    )
}

export default NavigationComponent
