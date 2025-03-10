import React from "react";
import Column from "./Column";

const Completed = ({ tasks }) => {
    return (
        <Column
            title="Completed"
            tasks={tasks}
            onAddTask={() => console.log("Add task to Completed")}
        />
    );
};

export default Completed;