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

export const CodeSection = ({ setCode, setLang }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("cpp");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    setLang(selectedLanguage);
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <div className="h-[53vh] bg-white rounded-md overflow-y-scroll">
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
      </div>

      <div style={{ overflowY: "scroll" }}>
        <Editor onCodeChange={handleCodeChange} lang={selectedLanguage} />
      </div>
    </div>
  );
};
