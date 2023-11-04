import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProblemStatement } from "./ProblemStatement";
import { AiOutlineFire } from "react-icons/ai";
import { LuTimer } from "react-icons/lu";
import { ProfileController } from "../../components/Navbar/ProfileController";
import { CodeSection } from "./CodeSection";
import { TestCases } from "./TestCases";
import { playgroundApi, problemApi } from "../../services/apis";

import { apiConnector } from "../../services/apiconnector";

export const Code = () => {
  const [count, setCount] = useState(0);
  const { problemId } = useParams();
  const [problemData, setProblemData] = useState([]);
  const [code, setCode] = useState("");
  const [lang, setLang] = useState("");

  const [output, setOutput] = useState("");

  // const handleRunCode = (newOutput) => {
  //   setOutput(newOutput);
  // };

  const [problemStatement, setProblemStatement] = useState("");
  useEffect(() => {
    const problemDetails = async () => {
      const res = await apiConnector("POST", problemApi.SHOW_PROBLEM_API, {
        problemId: problemId,
      });
      setProblemData(res.data.data);
      setProblemStatement(res.data.data.problem);
      console.log(problemData);
    };
    problemDetails();
    if (problemData != 0) {
      problemDetails();
    }
  }, [problemId]);

  const handleRunCode = async () => {
    try {
      const res = await apiConnector("POST", problemApi.COMPILE_CODE_API, {
        code: code,
        input: "0 -1 2 -3 1",
        language: "cpp",
      });
      console.log(res);
    } catch (error) {
      console.error("Error during code compilation:", error);
    }
  };

  return (
    <div className="bg-[#F0F0F0] pt-2">
      <div className="w-[98%] m-auto h-[45px] flex bg-white rounded-md items-center justify-between">
        <div className="ml-8">Code School</div>
        <div className="flex items-center justify-center">
          <button
            className="bg-[#F0F0F0] text-[#1a1b1b] text-[13px] px-3 py-1 rounded-md"
            onClick={handleRunCode}
          >
            Run
          </button>
          <button className="bg-[#3876BF] ml-3 text-white text-[13px] px-2 py-1 rounded-md">
            Submit
          </button>
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <LuTimer size={20} />
          </div>
          <div className="flex items-center mr-5">
            <AiOutlineFire size={20} className="text-[20px] dark:text-white" />
            <p className="pl-1  dark:text-white">{count}</p>
          </div>
          <div>
            <ProfileController />
          </div>
        </div>
      </div>

      <div className="min-h-screen flex  p-3 bg-[#F0F0F0]">
        <div className="w-[47%]">
          <ProblemStatement problem={problemStatement} />
        </div>
        <div className="ml-2 w-[53%]">
          <div>
            <CodeSection setCode={setCode} setLang={setLang} />
          </div>
          <div>
            <TestCases />
          </div>
        </div>
      </div>
    </div>
  );
};
