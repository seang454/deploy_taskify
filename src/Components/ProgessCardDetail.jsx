import CheckBoxinProgess from "./CheckBoxinProgess.jsx";

export default function  ProgessCardDetail() {
    let email = "Houy@gmail.com";
    return (

        <div className={"mx-15 mr-2 px-2 h-screen space-y-4 mb-10 lg:w-[800px] hidden md:block md:w-96"}>
            <div className={" flex bg-gray-200 rounded-full w-auto items-center my-8 mx-auto h-14 text-[28px]  align-middle justify-center font-bold"}>
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
            <div className={"rounded-xl  w-auto border-2 border-gray-100 p-4 flex items-center justify-between align-middle justify-center"}>
                <div>Assigned to: </div>
                <div>{email}</div>
            </div>
            <div className={"flex align-items-center justify-end space-x-1"}>
                <button className={"rounded-md border border-gray-400 p-2 font-bold text-gray-700"}>Delete Task</button>
                <button className={"rounded-md border bg-primary text-background p-2 font-bold"}>Edit Task</button>
            </div>
        </div>
    )
}