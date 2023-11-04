import React from "react";

export const OutputSection = ({ output }) => {
  return (
    <div className="bg-white h-[65vh] ml-3 rounded-md overflow-y-scroll">
      <div
        className="p-1.5 pl-3 text-[15px]"
        style={{ borderBottom: "3px solid #F0F0F0" }}
      >
        Console
      </div>
      <div className="p-3">
        <pre>{output}</pre>
      </div>
    </div>
  );
};
