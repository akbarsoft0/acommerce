import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setAlert,
  setUserInfo,
} from "../../services/providers/redux/featuresSlice";

function Login({ handleClose }) {
  const [haveAccount, setHaveAccount] = useState(true);
  const [formData, setFormData] = useState({});
  const [name, setName] = useState("");
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // console.log(props);
  const handleSubmit = async (e, route) => {
    e.preventDefault();
    try {
      const data = await axios.post(`http://localhost:3001/${route}`, {
        name,
        password,
      });

      const user = data.data;
      if (user.msg) {
        dispatch(setAlert(user.msg));
      } else {
        dispatch(setUserInfo(user));
      }
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {haveAccount ? (
        <div className="login-page">
          <form onSubmit={(e) => handleSubmit(e, "login")} id="login">
            <h2>login page</h2>
            <input
              type="text"
              placeholder="enter username / email / phone no "
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">login</button>
            <hr />
            <h6>don't have an account?</h6>
          </form>
          <button type="button" onClick={() => setHaveAccount(!haveAccount)}>
            sing up
          </button>
        </div>
      ) : (
        <div className="register-page">
          <form onSubmit={handleSubmit} id="register">
            <h2>registration page</h2>
            <input
              type="text"
              name="name"
              placeholder="enter full name"
              onChange={handleInputChange}
            />
            <input
              name="email"
              type="email"
              placeholder="enter email"
              onChange={handleInputChange}
            />
            <input
              name="phone"
              type="phone"
              placeholder="enter phone no"
              onChange={handleInputChange}
            />
            <input
              name="password"
              type="password"
              placeholder="enter password"
              onChange={handleInputChange}
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="confirm password"
              onChange={handleInputChange}
            />
            <button type="submit">sign up</button>
          </form>
          <hr />
          <h6>don't have an account?</h6>
          <button type="button" onClick={() => setHaveAccount(!haveAccount)}>
            login
          </button>
        </div>
      )}
    </>
  );
}

export default Login;
