import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setAlert,
  setUserInfo,
} from "../../../services/providers/redux/featuresSlice";

function Register({ handleClose }) {
  const [haveAccount, setHaveAccount] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(`http://localhost:3001/user`, formData);
      const res = data.data;
      if (res.msg) {
        dispatch(setAlert(res.msg));
      } else {
        dispatch(setUserInfo(res));
      }
      handleClose();
    } catch (error) {
      console.error("Registration error:", error);
      dispatch(setAlert("Registration failed. Please try again later."));
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={handleRegister}>
        <h2>register page</h2>
        <input
          type="text"
          placeholder="enter first name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="enter last name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="enter email"
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="enter phone no"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={handleInputChange}
        />
        <button type="submit">sign up</button>
      </form>
      <hr />
      <h6>don't have an account?</h6>
      <button type="button" onClick={() => setHaveAccount(!haveAccount)}>
        Log in
      </button>
    </div>
  );
}

export default Register;
