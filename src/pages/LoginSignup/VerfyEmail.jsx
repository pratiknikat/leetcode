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
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        textAlign: "center",
        marginTop: "200px",
        padding: "20px",
      }}
    >
      <div>
        <h1>Verify Email</h1>
        <p>A verification code has been sent to you. Enter the code below</p>
        <form
          onSubmit={handleVerifyAndSignup}
          style={{ margin: "0 auto", maxWidth: "300px" }}
        >
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
                  width: "40px",
                  height: "40px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                  fontSize: "16px",
                  marginTop: "20px",
                  margin: "0 6px",
                }}
              />
            )}
            containerStyle={{
              justifyContent: "space-between",
              gap: "0 6px",
              marginBottom: "20px",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "6px",
              border: "none",
              marginBottom: "8px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            Verify Email
          </button>
        </form>
        <div>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <p>Back To Signup</p>
          </Link>
          <button
            onClick={() => dispatch(sendOtp(signupData.email))}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              width: "200px",
              padding: "10px 20px",
              borderRadius: "6px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "20px",
              transition: "background-color 0.3s ease-in-out",
              marginLeft: "10px",
            }}
          >
            Resend it
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
