import {
  InputClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassHeaderButton,
} from "../../../styles/codingtest/ChallengeStyles";

import React, { useRef, useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";

const MonacoEditor = ({ codeLanguage, value, setValue }) => {
  const editorRef = useRef();

  const focusToEditor = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  useEffect(() => {
    if (editorRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        editorRef.current.layout();
      });
      resizeObserver.observe(document.body);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  // const handleSubmit = async() => {
  //   // e.preventDefault();
  //   try{
  //     response = AxiosApi.codingtest(editorRef.current.getValue(), language);
  //   }
  //   catch (error){

  //   }
  // }
  return (
    <>
      <InputClass>
        <ClassHeader>
          <ClassHeaderTitle>INPUT</ClassHeaderTitle>
          {/* <ClassHeaderButton onClick={1}>Submit</ClassHeaderButton> */}
        </ClassHeader>
        <Editor
          height="100%"
          defaultLanguage={codeLanguage.toLowerCase()}
          onMount={focusToEditor}
          theme="vs-dark"
          value={value}
          onChange={(value) => setValue(value)}
          options={{
            tabSize: 2, // 탭 크기 설정 (2칸)
            minimap: {
              enabled: false,
            },
            automaticLayout: true,
          }}
        />
      </InputClass>
    </>
  );
};

export default MonacoEditor;
