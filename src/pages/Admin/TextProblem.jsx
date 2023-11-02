import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

export const TextProblem = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  //   const config = useMemo(
  //     {
  //       readonly: false, // all options from https://xdsoft.net/jodit/docs/,
  //       placeholder: placeholder || "Start typings...",
  //     },
  //     [placeholder]
  //   );

  return (
    <div className="w-[70%] m-[auto] ">
      <JoditEditor
        ref={editor}
        value={content}
        height={900}
        //   config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
    </div>
  );
};
