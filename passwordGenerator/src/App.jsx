import { useEffect, useRef, useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, charAllowed, numbersAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numbersAllowed, passwordGenerator]);

  const passwordRef = useRef(null);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="border border-white h-60 w-full">
        <div className="font-extrabold font-serif text-3xl m-6">
          password generator
        </div>

        <div className=" flex font-lg m-2 ">
          <input
            type="text"
            value={password}
            placeholder="PASSWORD"
            readOnly
            className="border-white pl-2 h-10 w-full"
            ref={passwordRef}
          />

          <button
            className="border-white ml-2 bg-gray-300 text-black h-10 flex items-center rounded-lg"
            onClick={copyPasswordToClipBoard}
          >
            COPY
          </button>
        </div>

        <div className=" flex flex-col float-left items-start">
          <div>
            <input
              type="range"
              className="m-2 ing-red-500 cursor-pointer"
              value={length}
              min={8}
              max={100}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>LENGTH : {length}</label>
          </div>
          <div className=" ">
            <input
              type="checkBox"
              defaultChecked={numbersAllowed}
              className="m-2"
              id="numberInput"
              onChange={() => {
                setNumbersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">NUMBER</label>
          </div>
          <div className="float-left">
            <input
              type="checkBox"
              id="charInput"
              defaultChecked={charAllowed}
              className="m-2"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">SYMBOL </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
