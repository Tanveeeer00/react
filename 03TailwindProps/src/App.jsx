import "./App.css";
import Cards from "./components/Cards";

function App() {
  /* const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]
  */
  return (
    <>
      <h1 className="bg-violet-400 text-white m-8 p-8 rounded-xl">
        Hello world
      </h1>
      <Cards username="Luix" btnText="click me" />
      <Cards username="Tanveer" />
    </>
  );
}

export default App;
