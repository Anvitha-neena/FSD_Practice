import Navbar from "../components/Navbar"
import { Outlet } from "react-router"
const AppLayout = () =>{
    return(
        <>
        <Navbar />
        <div style={{border:"1px solid black", padding:"16px"}}>
            <Outlet />
        </div>
        </>
    )
}

export default AppLayout