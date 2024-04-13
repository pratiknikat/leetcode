import React, { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Navbar } from "../../../components/Navbar/Navbar";

import { endpoints, problemApi } from "../../../services/apis";
import { apiConnector } from "../../../services/apiconnector";
import { useSelector } from "react-redux";

export const AddProblem = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  console.log(user);
  const [content, setContent] = useState(""); // State to manage editor content
  const [sampleTestCases, setSampleTestCases] = useState([
    { input: "", output: "" },
  ]); // State to manage sample test cases
  const [testCases, setTestCases] = useState([{ input: "", output: "" }]); // State to manage test cases
  const [problemLevel, setProblemLevel] = useState("easy"); // State to manage problem level
  const [problemTitle, setProblemTitle] = useState(""); // State to manage problem title
  const editorRef = useRef(null); // Ref to access the editor instance

  // Handle editor content change
  const handleEditorChange = (content, editor) => {
    setContent(content);
  };

  // Add a new sample test case
  const addSampleTestCase = () => {
    setSampleTestCases([...sampleTestCases, { input: "", output: "" }]);
  };

  // Add a new test case
  const addTestCase = () => {
    setTestCases([...testCases, { input: "", output: "" }]);
  };

  // Handle change in sample test case input or output
  const handleSampleTestCaseChange = (index, key, value) => {
    const updatedTestCases = [...sampleTestCases];
    updatedTestCases[index][key] = value;
    setSampleTestCases(updatedTestCases);
  };

  // Handle change in test case input or output
  const handleTestCaseChange = (index, key, value) => {
    const updatedTestCases = [...testCases];
    updatedTestCases[index][key] = value;
    setTestCases(updatedTestCases);
  };

  // Handle problem level change
  const handleProblemLevelChange = (e) => {
    setProblemLevel(e.target.value);
  };

  // Handle problem title change
  const handleProblemTitleChange = (e) => {
    setProblemTitle(e.target.value);
  };

  // Save sample test cases
  const saveSampleTestCases = () => {
    console.log("Saved Sample Test Cases:", sampleTestCases);
    // Perform further actions here, such as sending sample test cases to backend, etc.
  };

  // Save test cases
  const saveTestCases = () => {
    console.log("Saved Test Cases:", testCases);
    // Perform further actions here, such as sending test cases to backend, etc.
  };

  const addProblem = async () => {
    try {
      // Extract raw content from the TinyMCE editor instance
      const rawContent = editorRef.current.getContent();
      const payload = {
        userID: user._id,
        problemTitle,
        problemLevel,
        content: rawContent,
        sampleTestCases,
        testCases,
      };

      const response = await apiConnector(
        "POST",
        endpoints.ADD_PROBLEM,
        payload
      );

      console.log("Problem added:", response.data);
      // Dispatch any necessary actions (e.g., update state or show success message)
    } catch (error) {
      console.error("Failed to add problem:", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-[80%] m-auto">
        <div className="mb-4">
          <label className="font-semibold">Problem Title:</label>
          <input
            type="text"
            value={problemTitle}
            onChange={handleProblemTitleChange}
            className="border rounded px-2 py-1 ml-2 bg-transparent w-[50%]"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold">Select Problem Level:</label>
          <select
            value={problemLevel}
            onChange={handleProblemLevelChange}
            className="border rounded px-2 py-1 ml-2"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <Editor
          apiKey="i0eag96fgennk7ajsq7k0kgu07tuvu7nlxnnse1slyyswjgn"
          onInit={(evt, editor) => {
            editorRef.current = editor;
          }}
          initialValue={content}
          init={{
            height: 500,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
          }}
          onChange={handleEditorChange}
        />

        <div className="mt-10">
          <h1 className="font-semibold text-[20px]">Add Sample Test Cases</h1>
          {sampleTestCases.map((testCase, index) => (
            <div key={index} className="mt-4">
              <input
                type="text"
                placeholder="Input"
                value={testCase.input}
                onChange={(e) =>
                  handleSampleTestCaseChange(index, "input", e.target.value)
                }
                className="border rounded px-2 py-1 mr-2 bg-transparent"
              />
              <input
                type="text"
                placeholder="Output"
                value={testCase.output}
                onChange={(e) =>
                  handleSampleTestCaseChange(index, "output", e.target.value)
                }
                className="border rounded px-2 py-1 mr-2 bg-transparent"
              />
            </div>
          ))}

          <button
            onClick={addSampleTestCase}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Add More Sample Test Case
          </button>

          <button
            onClick={saveSampleTestCases}
            className="ml-4 bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            Save Sample Test Cases
          </button>
        </div>

        <div className="mt-10">
          <h1 className="font-semibold text-[20px]">Add Test Cases</h1>
          {testCases.map((testCase, index) => (
            <div key={index} className="mt-4">
              <input
                type="text"
                placeholder="Input"
                value={testCase.input}
                onChange={(e) =>
                  handleTestCaseChange(index, "input", e.target.value)
                }
                className="border rounded px-2 py-1 mr-2 bg-transparent"
              />
              <input
                type="text"
                placeholder="Output"
                value={testCase.output}
                onChange={(e) =>
                  handleTestCaseChange(index, "output", e.target.value)
                }
                className="border rounded px-2 py-1 mr-2 bg-transparent"
              />
            </div>
          ))}

          <button
            onClick={addTestCase}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Add More Test Case
          </button>

          <button
            onClick={saveTestCases}
            className="ml-4 bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            Save Test Cases
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-[#003C43] px-5 p-2 rounded-md text-white"
          style={{
            marginTop: "96px",
            fontSize: "17px",
            marginBottom: "100px",
          }}
          onClick={addProblem}
        >
          Add Problem
        </button>
      </div>
    </div>
  );
};

export default AddProblem;
