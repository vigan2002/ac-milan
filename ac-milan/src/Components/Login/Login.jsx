import React, { useState } from 'react';
import Input from "../Input/Input";
import "./login.scss";

const Login = ({ close }) => {

  const [data, setData] = useState({
    username: "",
    password: ""
  });


  const handelChanges = (event) => {
    // console.log("Event", event.target.value);
    // console.log("Name", event.target.name);
    const getData = { ...data, [event.target.name]: event.target.value };
    setData(getData);
  }

  const save = (e) => {
    e.preventDefault();
    console.log("data!", data);
    if (data.username === data.password) {
      console.log("Done!");
      localStorage.setItem("user", data.username);
      close();
    } else {
      localStorage.setItem("user", "");
    }
  }

  return (
    <div className='login'>
        <h3>Login</h3>
        <form onSubmit={save}>
            <Input
              name="username"
              label="Username"
              change={handelChanges}
            />
            <Input
            type="password"
              name="password"
              label="Password"
              change={handelChanges}
            />
            <button type='submit' >Login</button>
        </form>
    </div>
  )
}

export default Login;
