"use client";

import { useDispatch } from "react-redux";
import { filterTasks } from "../redux/taskSlice";

const TaskFilters = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    dispatch(filterTasks(filterValue));
  };

  return (
    <div className="mb-4 max-w-sm mx-auto">
      <label htmlFor="filter" className="block text-gray-700 font-bold mb-2">
        Filter Tasks:
      </label>
      <select
        id="filter"
        onChange={handleFilterChange}
        className="bg-sky-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default TaskFilters;
