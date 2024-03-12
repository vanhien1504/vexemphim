import { Children } from "react"
import HomeLayout from "../components/Layout/HomeLayout"

export const useRouters = ()=>{
    return useRouters([
        {
            element : <HomeLayout/>,
            children:[
                
            ]
        }
    ])
}