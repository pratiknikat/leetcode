import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProblemStatement } from "./ProblemStatement";
import { AiOutlineFire } from "react-icons/ai";
import { LuTimer } from "react-icons/lu";
import { ProfileController } from "../../components/Navbar/ProfileController";
import { CodeSection } from "./CodeSection";
import { TestCases } from "./TestCases";
import { endpoints, problemApi } from "../../services/apis";
import { apiConnector } from "../../services/apiconnector";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import { BsCheckCircle, BsPlayFill } from "react-icons/bs";
import { RiTimerLine } from "react-icons/ri";
import { MdMemory } from "react-icons/md";
import { TiCodeOutline } from "react-icons/ti";

export const Code = () => {
  const [count, setCount] = useState(0);
  const { problemId } = useParams();
  const [problemData, setProblemData] = useState([]);
  const [code, setCode] = useState("");
  const [lang, setLang] = useState("");
  const [open, setOpen] = React.useState(false);
  const [output, setOutput] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [sampleTestCase, setSampleTestCase] = useState([]);
  const [testCases, setTestCases] = useState([]);
  const [items, setItems] = useState([]);
  const [avg, setAvg] = useState(0);
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  const handleNavigate = async () => {
    navigate("/");
  };

  useEffect(() => {
    const convertedItems = sampleTestCase.map((item, i) => ({
      key: item._id,
      label: `Case ${i + 1}`,
      children: (
        <>
          <p className="mb-2">nums = </p>
          <div className="p-3 rounded-md bg-[#f2f2f4] mb-4 ">{`${item.input}`}</div>
          <p className="mb-2">target =</p>
          <div className="p-3 rounded-md bg-[#f2f2f4] mb-4 ">
            {" "}
            {item.output}{" "}
          </div>
        </>
      ),
    }));

    setItems(convertedItems);
  }, [sampleTestCase]);

  useEffect(() => {
    const problemDetails = async () => {
      try {
        const res = await apiConnector("POST", problemApi.SHOW_PROBLEM_API, {
          problemId: problemId,
        });
        setProblemData(res.data.data);
        setProblemStatement(res.data.data.problem);
        setSampleTestCase(res.data.data.sampleTestCase);
        setTestCases(res.data.data.TestCase);
      } catch (error) {
        console.error("Error fetching problem details:", error);
      }
    };

    problemDetails();
  }, [problemId]);

  const handleRunCode = async () => {
    try {
      let totalExecutionTime = 0;
      let allTestCasesPassed = true;

      const promises = testCases.map(async (testCase, index) => {
        const res = await apiConnector("POST", problemApi.COMPILE_CODE_API, {
          code: code,
          input: testCase.input,
          language: "cpp", // Assuming the language is always "cpp" for simplicity
        });

        if (res.data.success) {
          const executionTime = res.data.time;
          totalExecutionTime += executionTime;
          setOutput((prevOutput) => prevOutput + res.data.message);

          const userOutput = res.data.message.trim();
          const expectedOutput = testCase.output.trim();

          if (userOutput !== expectedOutput) {
            allTestCasesPassed = false;
            // Display popup with details
            console.log(`Test Case ${index + 1} Failed:`);
            console.log(`User Output: ${userOutput}`);
            console.log(`Expected Output: ${expectedOutput}`);
          } else {
            console.log(`Test Case ${index + 1} Passed`);
          }
        } else {
          console.error("Error during code compilation:", res.data.message);
        }
      });

      await Promise.all(promises);

      if (allTestCasesPassed) {
        console.log("All test cases passed!");
      } else {
        // Show a popup or handle the display of failure details as needed
        // You may want to use a library like MUI Dialog for displaying popups
      }

      const averageExecutionTime = totalExecutionTime / testCases.length;
      console.log(`Average Time Complexity: ${averageExecutionTime} ms`);
    } catch (error) {
      console.error("Error during code compilation:", error);
    }
  };

  const addToUser = async () => {
    const add = await apiConnector("POST", endpoints.ADDPROBLEMTOUSER, {
      userId: user._id,
      problemId: problemId,
    });
  };
  const handleSubmitCode = async () => {
    try {
      let totalExecutionTime = 0;
      let allTestCasesPassed = true;

      const promises = testCases.map(async (testCase, index) => {
        const res = await apiConnector("POST", problemApi.COMPILE_CODE_API, {
          code: code,
          input: testCase.input,
          language: "cpp",
        });

        if (res.data.success) {
          const executionTime = res.data.time;
          totalExecutionTime += executionTime;
          setOutput((prevOutput) => prevOutput + res.data.message);
          const userOutput = res.data.message.trim();
          const expectedOutput = testCase.output.trim();

          if (userOutput !== expectedOutput) {
            allTestCasesPassed = false;
            console.log(`Test Case ${index + 1} Failed:`);
            console.log(`User Output: ${userOutput}`);
            console.log(`Expected Output: ${expectedOutput}`);
          } else {
            console.log(`Test Case ${index + 1} Passed`);
          }
        } else {
          console.error("Error during code compilation:", res.data.message);
        }
      });

      await Promise.all(promises);

      if (allTestCasesPassed) {
        setOpen(true);
        addToUser();
        console.log("All test cases passed!");
      } else {
      }

      const averageExecutionTime = totalExecutionTime / testCases.length;
      setAvg(averageExecutionTime);
      console.log(`Average Time Complexity: ${averageExecutionTime} ms`);
    } catch (error) {
      console.error("Error during code compilation:", error);
    }
  };

  const handleClickOpen = () => {
    handleSubmitCode();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    console.log("Submit clicked");
  };

  return (
    <div className="bg-[#F0F0F0] pt-2 h-[100vh]">
      <div className="w-[98%] m-auto h-[45px] flex bg-white rounded-md items-center justify-between">
        <div className="ml-8 flex items-center">
          <TiCodeOutline size={24} color="red" />{" "}
          <b className="ml-3">Code School</b>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-[#F0F0F0] flex text-[#1a1b1b] text-[13px] px-2 py-1 font-bold rounded-md items-center gap-1"
            onClick={handleRunCode}
          >
            <BsPlayFill size={15} />
            Run
          </button>
          <React.Fragment>
            <button
              className="bg-[#3876BF] font-bold ml-3 text-white text-[13px] px-2 py-1 rounded-md"
              onClick={handleClickOpen}
            >
              Submit
            </button>
            <Dialog
              open={open}
              onClose={handleClose}
              maxWidth="lg"
              fullWidth
              PaperProps={{
                style: {
                  width: "700px",
                  height: "460px",
                },
              }}
            >
              <DialogContent>
                <div>
                  <div className="flex items-center mt-4">
                    <BsCheckCircle size={25} color="green" />
                    <p
                      className="font-[20px] ml-4  font-bold"
                      style={{ fontSize: "20px", color: "#77ab59" }}
                    >
                      Accepted
                    </p>
                  </div>
                  <div className="flex mt-4">
                    <div
                      className="rounded-md p-4 mt-4 items-start "
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                        width: "50%",
                      }}
                    >
                      <div
                        className="flex items-center"
                        style={{ fontSize: "15px" }}
                      >
                        <RiTimerLine size={17} />
                        <p className="ml-2">Runtime </p>
                      </div>
                      <div className="flex mt-3 ml-1">
                        <b style={{ color: "black" }}>{avg / 100}</b>
                        <p className="ml-1">ms</p>
                      </div>
                      <div className="flex mt-2 ml-1">
                        <b style={{ fontSize: "12px", color: "#77ab60" }}>
                          Beats 100.00%{" "}
                        </b>
                        <p style={{ fontSize: "12px", marginLeft: "4px" }}>
                          {" "}
                          of users with C++
                        </p>
                      </div>
                    </div>
                    <div
                      className="rounded-md p-4 mt-4 items-start"
                      style={{
                        width: "50%",
                        boxShadow:
                          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                        marginLeft: "20px",
                      }}
                    >
                      <div
                        className="flex items-center"
                        style={{ fontSize: "15px" }}
                      >
                        <MdMemory size={17} />
                        <p className="ml-2">Memory </p>
                      </div>
                      <div className="flex mt-3 ml-1">
                        <b style={{ color: "black" }}>9.98</b>
                        <p className="ml-1">ms</p>
                      </div>
                      <div className="flex mt-3 ml-1">
                        <b style={{ fontSize: "12px", color: "red" }}>
                          Beats 10.00%{" "}
                        </b>
                        <p style={{ fontSize: "12px", marginLeft: "4px" }}>
                          {" "}
                          of users with C++
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <p
                      className="mb-4"
                      style={{ color: "#172067", fontFamily: "sans-serif" }}
                    >
                      More challenges
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      <p
                        className="w-[47%] p-1 px-3 m-1 bg-[#F0F0F0] rounded-md"
                        style={{ fontSize: "15px" }}
                      >
                        Binary Tree Maximum path sum
                      </p>
                      <p
                        className="w-[47%] p-1 px-3 m-1 bg-[#F0F0F0] rounded-md"
                        style={{ fontSize: "15px" }}
                      >
                        Binary Tree Maximum path sum
                      </p>
                      <p
                        className="w-[47%] p-1 px-3 m-1 bg-[#F0F0F0] rounded-md"
                        style={{ fontSize: "15px" }}
                      >
                        Binary Tree Maximum path sum
                      </p>
                    </div>
                  </div>
                  <div className="mt-7 flex justify-center">
                    <button
                      className="p-2 px-4 bg-[#3876BF] text-white rounded-md "
                      onClick={handleNavigate}
                    >
                      Solve Next Problem
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </React.Fragment>
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <LuTimer size={20} />
          </div>
          <div className="flex items-center mr-5">
            <AiOutlineFire size={20} className="text-[20px] dark:text-white" />
            <p className="pl-1 dark:text-white">{count}</p>
          </div>
          <div>
            <ProfileController />
          </div>
        </div>
      </div>

      <div className="min-h-screen flex p-3 bg-[#F0F0F0]">
        <div className="w-[47%]">
          <ProblemStatement problem={problemStatement} />
        </div>
        <div className="ml-2 w-[53%]">
          <div>
            <CodeSection setCode={setCode} setLang={setLang} />
          </div>
          <div>
            <TestCases items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};
