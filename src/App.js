import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import * as math from "mathjs";


function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  
  const setInput = (event) => {
    setText((text)=>[...text, event.target.innerText]);
  }

  const resetInput = () =>{
    setText("");
    setResult("");
  }

  const calculateResult = () => {
    const input = text.join(""); // Remove commas

    setResult(math.evaluate(input));
  };

  return (
    <div className="main_div">
      <div className="main_box">
        <div className="result_viewPort">{result}</div>
        <div className="input_viewPort">{text}</div>
        <div className="buttons">
      
            <div className="set">
            <span className="opt_icon" onClick={resetInput}>AC</span>
            <span className="opt_icon">+/-</span>
            <span className="opt_icon" onClick={setInput}>%</span>
            <span className="op_icon" onClick={setInput}>/</span>
            </div>
            <div className="set">
            <span onClick={setInput}>1</span>
            <span onClick={setInput}>2</span>
            <span onClick={setInput}>3</span>
            <span onClick={setInput} className="op_icon">*</span>
            </div>
            <div className="set">
            <span onClick={setInput}>4</span>
            <span onClick={setInput}>5</span>
            <span onClick={setInput}>6</span>
            <span onClick={setInput} className="op_icon">-</span>
            </div>
            <div className="set">
            <span onClick={setInput}>7</span>
            <span onClick={setInput}>8</span>
            <span onClick={setInput}>9</span>
            <span onClick={setInput} className="op_icon">+</span>
            </div>
            <div className="set">
            <span onClick={setInput} className="zero">0</span>
            <span onClick={setInput}>.</span>
            <span className="op_icon" onClick={calculateResult}>=</span></div>
        </div>
      </div>
    </div>
  );
}

export default App;
