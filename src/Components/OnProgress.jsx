import React from "react";
import Column from "./Column";

const OnProgress = ({ tasks }) => {
    return (
        <Column
            title="On Progress"
            tasks={tasks}
            onAddTask={() => console.log("Add task to On Progress")}
        />
    );
};

export default OnProgress;