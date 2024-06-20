import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setAlert,
  setUserInfo,
} from "../../../services/providers/redux/featuresSlice";
import Register from "../register/Register";

function Login({ handleClose }) {
  const [haveAccount, setHaveAccount] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

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
          <form onSubmit={(e) => handleSubmit(e, "login")}>
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
        <Register handleClose={handleClose} />
      )}
    </>
  );
}

export default Login;
