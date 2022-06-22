import { createSlice } from "@reduxjs/toolkit";

const defaultTasks = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "2", title: "Something more", state: "TASK_INBOX" },
  { id: "3", title: "Something else", state: "TASK_INBOX" },
  { id: "4", title: "Something again", state: "TASK_INBOX" },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: defaultTasks,
  reducers: {
    achiveTask(state: any, action: any) {
      const todo = state.find((todo: any) => todo.id === action.payload);
      todo.state = "TASK_ARCHIVED";
    },
    pinTask(state: any, action: any) {
      const todo = state.find((todo: any) => todo.id === action.payload);
      todo.state = "TASK_PINNED";
    },
  },
});

export const selectTasks = (state: any) => state.todos;
export const { achiveTask, pinTask } = todosSlice.actions;
export default todosSlice.reducer;
