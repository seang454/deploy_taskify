import NavbarV2 from "../NavbarV2.jsx";
import {Outlet} from "react-router";
import Sidebar from "../Sidebar.jsx";

export default function rootLayoutv2(){
    return (
       <div >
        <NavbarV2/>
           <div className="flex h-[580px] overflow-y-visible">
               <Sidebar/>
               <Outlet/>
           </div>

</div>
    )
}