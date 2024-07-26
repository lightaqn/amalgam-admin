import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiMethods";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="containerLogin">
      <span className="title">
        the Enigma<b>Project</b>
      </span>

      <div className="smContainer">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => handleClick}>Login</button>
        <h1 className="slogan">the very best...</h1>
      </div>
    </div>
  );
};

export default Login;
