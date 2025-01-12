import React, { useRef, useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";

const MonacoJava = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <Editor
      height="100%"
      defaultLanguage="java"
      defaultValue={`public class Main{\n\tpublic static void main(String[] args){\n\t\t// 입력해보세요.\n\t}\n}`}
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

export default MonacoJava;
