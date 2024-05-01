"use client";

import { useDispatch } from "react-redux";
import { searchTasks } from "../redux/taskSlice";

const TaskSearch = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    dispatch(searchTasks(searchTerm));
  };

  return (
    <div className="mb-4 max-w-sm mx-auto ">
      <label htmlFor="search" className="block text-gray-700 font-bold mb-2">
        Search Tasks:
      </label>
      <input
        type="text"
        id="search"
        onChange={handleSearchChange}
        className=" bg-sky-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default TaskSearch;
