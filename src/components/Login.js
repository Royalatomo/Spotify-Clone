import React from "react";
import "./styles/login.css";
import { loginUrl } from "../spotify";

const Login = () => {
  return (
    <div className="login">
      <div className="logo">
        <img src="/img/spotify-logo.svg" alt="" />
      </div>
      <a href={loginUrl}>login with spotify</a>
    </div>
  );
};

export default Login;
