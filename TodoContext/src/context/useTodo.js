import { useContext } from "react";
import todoContext from "./todoContext";

const useTodo = () => {
  return useContext(todoContext);
};

export default useTodo;
