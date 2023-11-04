import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";

export const Editor = ({ onCodeChange, lang }) => {
  const [code, setCode] = useState(getDefaultCode(lang));

  useEffect(() => {
    // Reset code when the language changes
    setCode(getDefaultCode(lang));
  }, [lang]);

  const handleCodeChange = (value, viewUpdate) => {
    setCode(value);
    onCodeChange(value);
  };

  function getDefaultCode(language) {
    switch (language) {
      case "cpp":
        return `#include <iostream>\nusing namespace std;\n\nint main() {\n\tcout << "Hello, World!" << endl;\n\treturn 0;\n}`;
      case "python":
        return `print("Hello, World!")`;
      case "java":
        return `public class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello, World!");\n\t}\n}`;
      default:
        return "";
    }
  }

  const extensions =
    lang === "cpp"
      ? [cpp({ cpp: true })]
      : lang === "java"
      ? [java()]
      : lang === "python"
      ? [python()]
      : [];

  return (
    <CodeMirror
      value={code}
      height="100vh"
      theme={githubLight}
      extensions={extensions}
      onChange={handleCodeChange}
    />
  );
};
