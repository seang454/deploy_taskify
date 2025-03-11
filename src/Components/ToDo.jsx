import React from "react";
import Column from "./Column";

const ToDo = ({ tasks }) => {
    return (
        <Column
            title="To Do"
            tasks={tasks}
            onAddTask={() => console.log("Add task to To Do")}
        />
    );
};

export default ToDo;