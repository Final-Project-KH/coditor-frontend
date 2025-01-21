import {
  InputClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassHeaderButton,
  ConsoleClass,
  StyledDiv,
} from "../../react/styles/codingtest/java/CodingTestJava";

import React, { useRef, useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { useData } from "./MonacoContext";
import AxiosApi from "../../api/AxiosApi";
import store from "../../redux/store/store";

const MonacoJava = ({ secondpath }) => {
  const editorRef = useRef();
  const [value, setValue] = useState("");

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const Upperlanguage = { secondpath };

  const { setData } = useData();

  const { data } = useData();

  const handleUpdateData = () => {
    setData({ codingtest: editorRef.current.getValue() });
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

      <ConsoleClass>
        <ClassHeader>
          <ClassHeaderTitle>CONSOLE</ClassHeaderTitle>
        </ClassHeader>
        <StyledDiv>👉 전달받은 값 : {data.codingtest}</StyledDiv>
      </ConsoleClass>
    </>
  );
};

export default MonacoJava;
