import { createContext } from "react";

const todoContext = createContext({
  todos: [{ id: 1, todo: "Todo msg", completed: false }],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  toggleComplete: () => {},
});

export default todoContext;
