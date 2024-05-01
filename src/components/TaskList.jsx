"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../redux/taskSlice";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const dispatch = useDispatch();
  const filteredTasks = useSelector((state) => state.tasks.filteredTasks);
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
    <div className="mt-8">
      {editingTask && <TaskForm task={editingTask} onClose={handleCloseForm} />}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`bg-white shadow-md rounded-lg p-4 ${
              task.completed ? "bg-green-100" : ""
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleCompletion(task.id)}
                  className="mr-2 form-checkbox h-5 w-5 text-blue-500"
                />
                <span
                  className={`text-lg font-semibold ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.title}
                </span>
              </div>
              <div>
                <button
                  onClick={() => handleEditTask(task)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-gray-700">{task.description}</p>
            <p className="text-gray-600 mt-2">Category: {task.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
