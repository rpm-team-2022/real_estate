import React, { useState } from "react";

const initialForm = {
  userName: "",
  password: "",
};

const Login = ({ state, setState }) => {
  const [form, setForm] = useState(initialForm);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setState({ ...state, isLoggedIn: true });
  };
  return (
    <div>
      <form action="submit" onSubmit={submitHandler}>
        <label htmlFor="password">
          User Name: &nbsp;
          <input
            type="text"
            id="userName"
            name="userName"
            value={form.userName}
            placeholder="enter your user name here"
            onChange={changeHandler}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password: &nbsp;
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            placeholder="enter your password here"
            onChange={changeHandler}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
