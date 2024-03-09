import React, { useState } from "react";

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);
  const [inputvalue, setinputvalue] = useState("pedro");
  const increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  let onChange = (event) => {
    const newval = event.target.value;
    setinputvalue(newval);
  };
  return (
    <div>
      <input placeholder="Enter something.." onChange={onChange} />
      {inputvalue}
      {""}
      {counter}
      <button onClick={increment}>Increment</button>{" "}
    </div>
  );
};

export default StateTutorial;
