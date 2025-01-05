import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TaskStatus } from "../types/types";

type TodoState = {
  tasks: Task[];
};

const initialState: TodoState = {
  tasks: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    removeTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },

    switchTask: (state, action: PayloadAction<{ id: string; type: TaskStatus }>) => {
      const { id, type } = action.payload;
      const task = state.tasks.find((task) => task.id === id);

      if (task) task.status = type;
    },

    addTask: (state, action: PayloadAction<string>) => {
      const title = action.payload;
      const date = Date.now();

      const newTask: Task = {
        id: `${title}${date}`,
        title,
        status: "idle",
        date,
      };

      state.tasks.push(newTask);
    },
  },
});

export const { removeTask, switchTask, addTask } = todoSlice.actions;
