// CodeSection.jsx
import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { GrPowerReset } from "react-icons/gr";
import { AiOutlineFullscreen } from "react-icons/ai";
import { Editor } from "./Editor";
import { apiConnector } from "../../services/apiconnector";
import { playgroundApi } from "../../services/apis";

export const CodeSection = ({ onRunCode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("cpp");
  const [code, setCode] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleRunCode = async () => {
    try {
      const res = await apiConnector("POST", playgroundApi.COMPILE_CODE_API, {
        code: code,
        language: selectedLanguage,
      });
      onRunCode(res.data.message); // Pass output to the parent component
    } catch (error) {
      console.error("Error during code compilation:", error);
    }
  };

  return (
    <div className="h-[97vh] bg-white rounded-md overflow-y-scroll">
      <div
        className="flex items-center justify-between px-4 py-1"
        style={{ borderBottom: "3px solid #F0F0F0" }}
      >
        <Box sx={{ width: "80px" }}>
          <FormControl fullWidth>
            <NativeSelect
              style={{ fontSize: "13px", border: "none" }}
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </NativeSelect>
          </FormControl>
        </Box>
        <div className="flex items-center">
          <GrPowerReset style={{ color: "#F0F0F0", cursor: "pointer" }} />
          <AiOutlineFullscreen size={18} className="ml-4 cursor-pointer" />
          <button
            onClick={handleRunCode}
            className="bg-[#3876BF] ml-5 text-white text-[13px] px-2 py-1 rounded-md"
          >
            Run Code
          </button>
        </div>
      </div>

      <div style={{ overflowY: "scroll" }}>
        <Editor onCodeChange={handleCodeChange} lang={selectedLanguage} />
      </div>
    </div>
  );
};
