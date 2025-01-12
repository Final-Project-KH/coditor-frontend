import {
  InputClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassHeaderButton,
  StyledDiv,
} from "../../react/styles/codingtest/java/CodingTestJava";

import React, { useRef, useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { useData } from "./MonacoContext";

const MonacoJava = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
    console.log("초기 코드값: ", editor.getValue());
  };

  // 현재 브라우저 화면이 작은 상태에서는 콘솔 창 열 시 에러 문구가 뜸
  // 해결하기 위한 방법 찾는중
  // const handleResize = () => {
  //   if (editorRef.current) {
  //     editorRef.current.layout();
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  const { setData } = useData();

  const handleUpdateData = () => {
    setData({ codingtest: editorRef.current.getValue() });
  };

  return (
    <InputClass>
      <ClassHeader>
        <ClassHeaderTitle>INPUT</ClassHeaderTitle>
        <ClassHeaderButton onClick={() => handleUpdateData()}>
          Submit
        </ClassHeaderButton>
      </ClassHeader>
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
          automaticLayout: true,
        }}
      />
    </InputClass>
  );
};

export default MonacoJava;
