import "./App.css"
import { useState } from "react";

import * as math from "mathjs";

import Button from "./components/Button"
import Input from "./components/input";

const App = () => {

  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const signalSet = new Set(["/", "*", "+", "-", "."]);

  const lastChar = text[text.length - 1];

  const addToText = (val) => {

    // Prevent input signal at the beginning
    if (lastChar === undefined && signalSet.has(val)) {
      return;
    }
    // Prevent input signal after signal
    if (signalSet.has(lastChar) && signalSet.has(val)) {
      return;
    } else {
      setText((text) => [...text, val]);
    }
  }

  const calculateResult = () => {
    if (text.length === 0 || signalSet.has(lastChar)) {
      // if input is empty or ended with operation signal, do not calculate
      return;
    }
    const input = text.join("").trim(); // join input
    setResult(math.evaluate(input));
  }

  const resetInput = () => {
    setText("")
    setResult("")
  }

  const BackForwardInput = () => {
    setText((text) => text.slice(0, -1));
  }

  const buttonColor = "#f2a33c";

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="Clear" handleClick={resetInput} />
          <Button symbol="Back" handleClick={BackForwardInput} />
        </div>
      </div>
    </div>
  );
}

export default App;
