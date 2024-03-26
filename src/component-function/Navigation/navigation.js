import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"
import HomeScreenComponent from "./home-screen"
import ContactScreenComponent from "./contact-screen"
import AboutScreenComponent from "./about-screen"
import SettingScreenComponent from "./settings-screen"
import InvalidScreenCompo from "./invalid-screen"
import ProductList from "./product-list"


const NavigationCompo=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomeScreenComponent}/>
          <Route path="/Contact" Component={ContactScreenComponent}/>
          <Route path="/About" Component={AboutScreenComponent} />
          <Route path="/Setting" Component={SettingScreenComponent} />
          <Route path="*"Component={InvalidScreenCompo} />
          <Route path="/category/:product" Component={ProductList}/>

        </Routes>
        </BrowserRouter>
        
        </>
    )
}
export default NavigationCompo



