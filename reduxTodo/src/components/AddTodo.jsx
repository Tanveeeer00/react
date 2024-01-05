import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Feature/Todo/todoSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    setInput("");
    dispatch(addTodo(input));
  };
  return (
    <>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-gray-700 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 outline-none text-base text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter the todo..."
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 rounded border-0 py-2 px-6 text-lg focus:outline-none hover:bg-indigo-600 "
        >
          Add todo
        </button>
      </form>
    </>
  );
};

export default AddTodo;
