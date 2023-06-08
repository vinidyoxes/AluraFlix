import { Outlet } from "react-router-dom"
import Banner from "../Banner/Banner"

export default function PaginaPadrao({children}){
    return(
        <main>
          <Banner></Banner>
          <Outlet/>
        {children}
        </main>
    )
}