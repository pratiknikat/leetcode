// Playground.jsx
import React, { useState } from "react";
import { CodeSection } from "./CodeSection";
import { OutputSection } from "./OutputSection";
import { Advertisment } from "./Advertisment";

export const Playground = () => {
  const [output, setOutput] = useState("");

  const handleRunCode = (newOutput) => {
    setOutput(newOutput);
  };

  return (
    <div className="flex bg-[#F0F0F0] h-[100vh] p-4">
      <div className="w-[60%] rounded-md">
        <CodeSection onRunCode={handleRunCode} />
      </div>
      <div className="w-[40%]">
        <div>
          <OutputSection output={output} />
        </div>
        <div>
          <Advertisment />
        </div>
      </div>
    </div>
  );
};
