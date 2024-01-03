import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "../../../assets/css/template.css";
function Template({ title, image, formType }) {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="templateSection">
      {loading ? (
        <h5>Loading ... </h5>
      ) : (
        <div>{formType === "signup" ? <SignupForm /> : <LoginForm />}</div>
      )}
    </div>
  );
}

export default Template;
