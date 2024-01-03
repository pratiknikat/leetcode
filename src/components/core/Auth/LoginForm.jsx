import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../../assets/css/template.css";
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
    //    console.log(email,password);
    dispatch(login(email, password, navigate));
  };
  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="loginForm">
      <div className="form-wrapper">
        <form onSubmit={submitHandler}>
          {/* <label>
                    <p>Email Address <sup>*</sup></p>

                    <input required type="text" name="email" value={email} onChange={changeHandler} placeholder="john@gmail.com"/>
                </label> */}
          <div class="form-control">
            <input
              required
              type="text"
              name="email"
              value={email}
              onChange={changeHandler}
            />
            <label>Email or phone number</label>
          </div>
          {/* <label>
                    <p>Password <sup>*</sup></p>

                    <input required type="password" name="password" value={password} onChange={changeHandler} />
                </label> */}
          <div class="form-control">
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={changeHandler}
            />
            <label>
              Password <sup style={{ color: "red" }}>*</sup>
            </label>
          </div>
          <button type="submit">Login</button>
          <div class="form-help">
            <div class="remember-me">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            {/* <a href="#">Need help?</a> */}
          </div>
        </form>
        <p>
          New to Netflix?<Link to="/signup">Sign Up</Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
