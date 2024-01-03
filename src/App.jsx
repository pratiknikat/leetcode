import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { Code } from "./pages/Code/Code";
import { AddProblem } from "./pages/Admin/AddProblem/AddProblem";
import { Playground } from "./pages/Playground/Playground";
import { Profile } from "./pages/Profile/Profile";
import Login from "./pages/LoginSignup/Login";
import Signup from "./pages/LoginSignup/Signup";
import VerifyEmail from "./pages/LoginSignup/VerfyEmail";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/problem/:problemId" element={<Code />}></Route>
        <Route path="/addproblem" element={<AddProblem />}></Route>
        <Route path="/playground" element={<Playground />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/verify-email" element={<VerifyEmail />}></Route>
      </Routes>
    </>
  );
}

export default App;
