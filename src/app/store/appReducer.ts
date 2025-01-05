import { combineReducers } from "@reduxjs/toolkit";
import { todoSlice } from "../../shared/model/todoSlice";

export const appReducer = combineReducers({
  [todoSlice.reducerPath]: todoSlice.reducer,
});
