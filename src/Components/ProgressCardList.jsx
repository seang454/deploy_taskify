import { ChevronLeft, ChevronRight, ClipboardList, Clock } from "lucide-react"
import { useState } from "react"


const DB = [
    {
        id: 1,
        title: "Project Alpha",
        description: "A comprehensive design system for web applications",
        createdDate: "2023-05-15",
        total: 10,
        task: 2,
        category: "Design",
    },
    {
        id: 2,
        title: "Website Redesign",
        description: "Complete overhaul of the company website with modern UI/UX principles",
        createdDate: "2023-06-20",
        total: 15,
        task: 8,
        category: "Development",
    },
    {
        id: 3,
        title: "Mobile App",
        description: "Cross-platform mobile application for customer engagement",
        createdDate: "2023-07-10",
        total: 20,
        task: 5,
        category: "Mobile",
    },
]

function ProgressCard({ item }) {
    const [isHovered, setIsHovered] = useState(false)



    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    return (
        <div
            className="rounded-xl bg-white  p-4 border-2 dark:text-white w-72 space-y-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}

        >
            <div className="flex items-center justify-between text-txt20 font-bold text-gray-600">
                <div>{item.title}</div>

                {isHovered ? (
                    <ChevronRight strokeWidth={1} className="mr-8" />
                ) : (
                    <ChevronLeft strokeWidth={1} className="mr-8" />
                )}
            </div>
            <div className="text-gray-500 line-clamp-2 w-56">{item.description}</div>
            <div className="text-gray-500 my-4">Created at: {formatDate(item.createdDate)}</div>
            <div className="flex items-center text-gray-500">
                <ClipboardList strokeWidth={1} className="mr-4" />
                {item.task} / {item.total}
            </div>
            <div className="text-gray-500 flex items-center">
                <div className="pr-2">Category: </div>
                <div
                    className={`border-2 p-1 rounded-lg text-txt12 ${
                        item.category === "Design"
                            ? "border-amber-300 text-amber-300"
                            : item.category === "Development"
                                ? "border-blue-300 text-blue-300"
                                : "border-green-300 text-green-300"
                    }`}
                >
                    {item.category}
                </div>
            </div>
            <div className="flex items-center bg-red-200 rounded-md text-accent justify-center w-24 p-1 text-txt12 h-5 py-3 pr-3 ">
                <Clock strokeWidth={1} className="mr-1" width={18} height={18} />
                {formatDate(item.createdDate).split("/")[0]}d
            </div>
        </div>
    )
}

export default function ProgressCardList() {
    return (
        <section className=" my-16 lg:my-0 p-4 mx-5 w-75  space-y-custom-dashed-line h-screen overflow-y-scroll">
            {DB.map((item) => (
                <ProgressCard key={item.id} item={item}/>
            ))}
        </section>
    )
}

