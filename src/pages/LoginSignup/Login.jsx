import Template from "../../components/core/Auth/Template";
import "../../assets/css/login.css";
function Login() {
  return (
    <div className="loginPage">
      <Template title="Log In" formType="login"></Template>
    </div>
  );
}

export default Login;
