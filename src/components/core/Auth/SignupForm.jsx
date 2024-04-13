import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
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

  const styles = {
    signupForm: {
      maxWidth: "400px",
      margin: "auto",
      padding: "30px",
      marginTop: "60px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "16px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "6px",
      fontSize: "16px",
      boxSizing: "border-box",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "6px",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s ease-in-out",
    },
    loginLink: {
      marginTop: "15px",
      fontSize: "14px",
      color: "#007bff",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  return (
    <div className="signup-dialog">
      <div style={styles.signupForm}>
        <h2>Create Account</h2>
        <form onSubmit={handleOnSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>
              Name <sup>*</sup>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleOnChange}
              placeholder="Enter Name"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.label}>
              Username <sup>*</sup>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleOnChange}
              placeholder="Enter Username"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email Address <sup>*</sup>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter Email Address"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>
              Confirm Password <sup>*</sup>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Create Account
          </button>
        </form>
        <p style={styles.loginLink}>
          Already have an account?{" "}
          <Link to="/login" style={styles.loginLink}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
