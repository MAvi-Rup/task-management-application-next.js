"use client";

import { useSelector } from "react-redux";
import TaskFilters from "./TaskFilters";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskSearch from "./TaskSearch";

const TaskManager = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="m-auto pt-16 ">
      <TaskForm task={null} onClose={() => {}} />
      <TaskSearch />
      <TaskFilters />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskManager;
