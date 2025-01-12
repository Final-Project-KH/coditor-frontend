import React, { useRef, useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";

const MonacoC = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <Editor
      height="100%"
      defaultLanguage="c"
      defaultValue={``}
      onMount={handleEditorDidMount}
      theme="vs-dark"
      value={value}
      onChange={(value) => setValue(value)}
      options={{
        tabSize: 2, // 탭 크기 설정 (2칸)
        minimap: {
          enabled: false,
        },
      }}
    />
  );
};

export default MonacoC;
