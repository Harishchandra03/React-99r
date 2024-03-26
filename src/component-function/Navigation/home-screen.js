import React from "react"
import NavigationBar from "./navigationbar"
import AxiosCompo from "./products"





function HomeScreenComponent() {
    return (

        <div>
            <NavigationBar />
            <h1>this is Home Screen</h1>
            <AxiosCompo/>
        </div>
    )
}

export default HomeScreenComponent