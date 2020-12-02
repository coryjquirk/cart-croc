import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from './logo.png';

function Login() {
  const [store] = useStoreContext();

  return (
        <div>
            <img src={Logo} alt="Logo" />
            <div>
            Username:
            <input placeholder="username"></input>
            </div>
            <div>Password:
            <input placeholder="password"></input>
            </div>
            <div><button>Login</button><button>Register</button></div>
        </div>
    );
}

export default Login;