import CheckBoxinProgess from "./CheckBoxinProgess.jsx";
import {NavLink} from "react-router";
import { IoIosArrowBack } from "react-icons/io";

export default function  ProgessCardDetail() {
    let email = "Houy@gmail.com";
    return (
        <div >
            <NavLink to="/progess" className={"absolute text-[30px] top-28 md:hidden"} >
                <IoIosArrowBack />
            </NavLink>
            <div className={"mx-15 mr-2 px-2  h-auto space-y-4 mb-10 p-3 lg:w-full md:block md:w-96"}>
            <div className={" flex bg-gray-200 rounded-full w-[300px] md:w-auto items-center lg:my-2 mx-auto h-14 text-[28px]  align-middle justify-center font-bold"}>
                Homepage UX/UI
            </div>
            <div className={"rounded-xl  w-auto border-2 border-gray-100 p-4 space-y-8"}>
                <div>Description:</div>
                <p >Create with place holder and responsive with all devices. Use the Flowbite component  and make every components are consistency.</p>
            </div>
            <div className={"rounded-xl  w-auto border-2 border-gray-100 p-4 space-y-8"}>
                <div className={"flex align-items-center justify-between"}>
                    <div>Created Date: </div>
                    <div>30th, January, 2025</div>
                </div>
                <div className={"flex align-items-center justify-between"}>
                    <div>Deadline : </div>
                    <div className={"text-accent"}>10th, March, 2025</div>
                </div>
                <div className={"flex align-items-center justify-between"}>
                    <div>Category : </div>
                    <div className={"text-accent"}>Design</div>
                </div>
            </div>
            <div className={"rounded-xl  w-auto border-2 border-gray-100 p-4 space-y-8"}>
                <div>Creating Component</div>
                <CheckBoxinProgess/>
            </div>
            <div className={"rounded-xl  w-auto border-2 border-gray-100 p-4 flex items-center justify-between align-middle"}>
                <div>Assigned to: </div>
                <div>{email}</div>
            </div>
            <div className={"flex align-items-center justify-end space-x-4 pb-3 mr-8 items-center "}>
                <button className={"px-3 rounded-md border h-[43px] w-[132px] border-gray-400 font-bold text-gray-700"}>
                    Delete Task
                </button>
                <button className={"px-3 rounded-md border h-[43px] w-[132px] bg-primary text-background  font-bold"}>
                     Edit Task
                </button>
            </div>
        </div>
        </div>
    )
}