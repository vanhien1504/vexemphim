import { Children } from "react"

export const useRouters = ()=>{
    return useRouters([
        {
            element : <MainLayout/>,
            Children:[
                
            ]
        }
    ])
}