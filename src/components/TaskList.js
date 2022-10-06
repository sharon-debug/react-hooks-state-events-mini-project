import React from "react";
import Task from "./Task"
function TaskList({tasks,onDeleteTask}) {
  const tasklist=tasks.map(task=><Task key={task.text}
    text={task.text}
    category={task.category}
    onDeleteTask={onDeleteTask}
    />)
  return (
    <div className="tasks">
      {tasklist}
    </div>
  );
}

export default TaskList;