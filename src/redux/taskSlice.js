import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    filteredTasks: [],
    searchTerm: '',
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            state.filteredTasks = state.tasks;
        },
        updateTask: (state, action) => {
            const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
            if (taskIndex !== -1) {
                state.tasks[taskIndex] = action.payload;
                state.filteredTasks = state.tasks;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            state.filteredTasks = state.tasks;
        },
        toggleTaskCompletion: (state, action) => {
            const taskIndex = state.tasks.findIndex((task) => task.id === action.payload);
            if (taskIndex !== -1) {
                state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
                state.filteredTasks = state.tasks;
            }
        },
        filterTasks: (state, action) => {
            const filterValue = action.payload;
            if (filterValue === 'all') {
                state.filteredTasks = state.tasks;
            } else if (filterValue === 'completed') {
                state.filteredTasks = state.tasks.filter((task) => task.completed);
            } else if (filterValue === 'incomplete') {
                state.filteredTasks = state.tasks.filter((task) => !task.completed);
            }
        },
        searchTasks: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.filteredTasks = state.tasks.filter(
                (task) =>
                    task.title.toLowerCase().includes(searchTerm) ||
                    task.description.toLowerCase().includes(searchTerm)
            );
        },
    },
});

export const { addTask, updateTask, deleteTask, toggleTaskCompletion, filterTasks, searchTasks } = tasksSlice.actions;
export default tasksSlice.reducer;