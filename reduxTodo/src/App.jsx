import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
