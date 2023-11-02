import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { Code } from "./pages/Code/Code";
import { AddProblem } from "./pages/Admin/AddProblem/AddProblem";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/problem" element={<Code />}></Route>
        <Route path="/addproblem" element={<AddProblem />}></Route>
      </Routes>
    </>
  );
}

export default App;
