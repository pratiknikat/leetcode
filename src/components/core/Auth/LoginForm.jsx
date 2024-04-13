import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/operations/authAPI";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const styles = {
    formWrapper: {
      maxWidth: "400px",
      margin: "auto",
      padding: "30px",
      border: "1px solid #ddd",
      marginTop: "200px",
      borderRadius: "8px",
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
    },
    heading: {
      fontFamily: "Arial, sans-serif",
      color: "#007bff",
      fontSize: "24px",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "12px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "16px",
      marginBottom: "20px",
      transition: "border-color 0.3s ease-in-out",
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
    signUpLink: {
      marginTop: "15px",
      fontSize: "14px",
      color: "#888",
      textDecoration: "none",
      transition: "color 0.3s ease-in-out",
    },
    signUpLinkHover: {
      color: "#007bff",
    },
  };

  return (
    <div className="loginForm">
      <div style={styles.formWrapper}>
        <h2 style={styles.heading}>CodeSchool</h2>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <input
              required
              type="text"
              name="email"
              value={email}
              onChange={changeHandler}
              style={styles.input}
              placeholder="Email or phone number"
            />
          </div>
          <div className="form-control">
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={changeHandler}
              style={styles.input}
              placeholder="Password"
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <p style={styles.signUpLink}>
          New to CodeSchool?{" "}
          <Link
            to="/signup"
            style={{ ...styles.signUpLink, ...styles.signUpLinkHover }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
