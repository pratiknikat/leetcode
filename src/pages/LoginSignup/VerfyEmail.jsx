import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../../services/operations/authAPI";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { useState } from "react";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const { signupData } = useSelector((state) => state.auth);
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const { name, username, email, password, confirmPassword } = signupData;
    dispatch(
      signUp(name, username, email, password, confirmPassword, otp, navigate)
    );
  };
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <div>
        <h1>Verify Email</h1>
        <p>A verification code has been sent to you. Enter the code below</p>
        <form onSubmit={handleVerifyAndSignup}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => (
              <input
                {...props}
                placeholder="-"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
              />
            )}
            containerStyle={{
              justifyContent: "space-between",
              gap: "0 6px",
            }}
          />
          <button type="submit">Verify Email</button>
        </form>
        <div>
          <Link to="/signup">
            <p>Back To Signup</p>
          </Link>
          <button onClick={() => dispatch(sendOtp(signupData.email))}>
            Resend it
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
