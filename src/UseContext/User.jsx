import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

const User = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>User:{username}</h1>
    </div>
  );
};

export default User;
