import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
