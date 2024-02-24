import { useState } from "react";
import Box from "./Box";
import Header from "./Header";
function App() {
  const [color, setColor] = useState("olive");
  const [name, setName] = useState("OLIVE");
  return (
    <div
    // className="w-full h-screen duration-200"
    // style={{ backgroundColor: color }}
    >
      <Header heading="Color Indicator" />
      <Box color={color} name={name} />
      <div
        className=" flex flex-wrap justify-center bottom-12 inset-x-0 mx-40 mt-8 px-2 w-90 h-30 duration-200 rounded-lg"
        style={{ background: color }}
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor("red");
              setName("RED");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("green");
              setName("GREEN");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("blue");
              setName("BLUE");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("fuchsia");
              setName("FUCHSIA");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "fuchsia" }}
          >
            fuchsia
          </button>
          <button
            onClick={() => {
              setColor("black");
              setName("BLACK");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
            onClick={() => {
              setColor("teal");
              setName("TEAL");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "teal" }}
          >
            teal
          </button>
          <button
            onClick={() => {
              setColor("violet");
              setName("VIOLET");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
          >
            pink
          </button>
          <button
            onClick={() => {
              setColor("purple");
              setName("PURPLE");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
          <button
            onClick={() => {
              setColor("indigo");
              setName("INDIGO");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "indigo" }}
          >
            indigo
          </button>
          <button
            onClick={() => {
              setName("CYAN");
              setColor("cyan");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "cyan" }}
          >
            cyan
          </button>
          <button
            onClick={() => {
              setName("ORANGE");
              setColor("orange");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
