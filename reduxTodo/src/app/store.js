import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Feature/Todo/todoSlice";

export const store = configureStore({ reducer: todoReducer });
