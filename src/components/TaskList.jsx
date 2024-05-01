"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../redux/tasksSlice";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [editingTask, setEditingTask] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleCompletion = (id) => {
    dispatch(toggleTaskCompletion(id));
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleCloseForm = () => {
    setEditingTask(null);
  };

  return (
    <div>
      {editingTask && <TaskForm task={editingTask} onClose={handleCloseForm} />}
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-4 bg-white shadow-md rounded mb-2 ${
              task.completed ? "bg-green-200" : ""
            }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleCompletion(task.id)}
                className="mr-2"
              />
              <span
                className={`text-lg ${task.completed ? "line-through" : ""}`}
              >
                {task.title}
              </span>
            </div>
            <div>
              <button
                onClick={() => handleEditTask(task)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
