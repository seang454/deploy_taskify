
import {Outlet} from "react-router";
import Sidebar from "../Sidebar.jsx";
import Navbar from "../Navbar.jsx";

export default function RootLayoutv2(){
    return (
       <div >
           <Navbar/>
           <div className="flex h-[580px] overflow-y-visible flex-row ">
               <Sidebar/>
               <Outlet/>
           </div>

</div>
    )
}