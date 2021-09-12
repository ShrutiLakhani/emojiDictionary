import React, { useState } from "react";
import "./styles.css";
var headingText = "Inside Outt";
/*var likeCounter = 0;*/
export default function App() {
  var [userInput, setUserInput] = useState("");
  function onChangeHandler(event) {
    console.log(event.target);
    setUserInput(event.target.value);
  }
  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input onChange={ onChangeHandler }></input>
      <div> Welcome { userInput } </div>
    </div>
  );
}
