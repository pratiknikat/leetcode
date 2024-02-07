import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "../../../assets/css/template.css";

import { sendOtp } from "../../../services/operations/authAPI";
import { setSignupData } from "../../../slices/authSlice";

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, username, email, password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }
    const signupData = {
      ...formData,
    };
    dispatch(setSignupData(signupData));
    dispatch(sendOtp(formData.email, navigate));
    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="signUpForm">
      <form onSubmit={handleOnSubmit}>
        <label>
          <h5>
            Name <sup>*</sup>
          </h5>
          <input
            type="text"
            required
            name="name"
            value={name}
            onChange={handleOnChange}
            placeholder="Enter Name"
          ></input>
        </label>
        <br></br>
        <label>
          <h5>
            Username <sup>*</sup>
          </h5>
          <input
            type="text"
            required
            name="username"
            value={username}
            onChange={handleOnChange}
            placeholder="Enter Username"
          ></input>
        </label>

        <label>
          <h5>
            Email Address <sup className="text-pink-200">*</sup>
          </h5>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
          />
        </label>

        {/* Password */}
        <label>
          <h5>
            Password<sup>*</sup>
          </h5>
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={handleOnChange}
          />
        </label>

        {/* consfirm Password */}
        <label>
          <h5>
            Confirm Password <sup>*</sup>
          </h5>
          <input
            required
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleOnChange}
          />
        </label>

        <button type="submit">Create Account</button>
      </form>

      <h4>
        {" "}
        Already Haave a Account{" "}
        <Link to="/login" style={{ color: "blue" }}>
          Login
        </Link>{" "}
      </h4>
    </div>
  );
}

export default SignupForm;
