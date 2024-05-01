"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/taskSlice";

const TaskForm = ({ task, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [category, setCategory] = useState(task?.category || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(updateTask({ ...task, title, description, category }));
    } else {
      dispatch(
        addTask({
          id: Date.now().toString(),
          title,
          description,
          category,
          completed: false,
        })
      );
    }
    onClose();
    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-sky-200 shadow-md rounded-lg p-6 mb-4 max-w-lg mx-auto"
    >
      <h1 className=" text-center text-2xl">Task Manager</h1>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-gray-700 font-bold mb-2"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {task ? "Update" : "Create"}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
