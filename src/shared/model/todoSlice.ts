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
  },
});

export const { removeTask, switchTask } = todoSlice.actions;
