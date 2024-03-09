import React, { useState } from "react";
//When to use useState ?
//For simple state management with independent updates.
//When the state transitions are not complex and do not depend on the previous state.
//When dealing with a single piece of state.
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
