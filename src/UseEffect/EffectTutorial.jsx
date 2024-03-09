import React, { useEffect, useState } from "react";
import axios from "axios";
//fetching data and updating dom
//use as well dependancy of array
//handles the side effect infunction componentssuch as fetchingdata , updating dom
const EffectTutorial = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
      });
  }, []);
  return <div>EffectTutorial{data}</div>;
};

export default EffectTutorial;
