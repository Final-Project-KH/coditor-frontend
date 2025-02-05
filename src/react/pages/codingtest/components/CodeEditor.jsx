import React, { useState, useEffect, useRef, useCallback } from "react";
import { Editor } from "@monaco-editor/react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { CodeEditorStyles as CssWrapper } from "../../../styles/codingtest/CodeEditorStyles";

const CodeEditor = ({
  codeLanguage,
  value,
  setValue,
  handleSubmitButtonClick,
  handleCancelButtonClick,
  isConnectedRef,
}) => {
  const editorRef = useRef(null);
  const headerElemRef = useRef(null);
  const [editorHeight, setEditorHeight] = useState("100%");
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [language, setLanguage] = useState("Java");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const initEditor = useCallback((editor) => {
    editorRef.current = editor;
    editor.focus();
  }, []);

  useEffect(() => {
    if (editorRef.current !== null) {
      const resizeObserver = new ResizeObserver(() => {
        editorRef.current.layout();
      });
      resizeObserver.observe(document.body);
    }
  }, [editorRef, document.body]);

  useEffect(() => {
    const updateEditorHeight = () => {
      if (headerElemRef.current) {
        const headerHeight = headerElemRef.current.offsetHeight;
        setEditorHeight(`calc(100% - ${headerHeight}px)`);
      }
    };

    updateEditorHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateEditorHeight();
    });

    if (headerElemRef.current) {
      resizeObserver.observe(headerElemRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <CssWrapper>
      <div ref={headerElemRef}>
        <span>CODE EDITOR</span>
        <div>
          <FormControl
            style={{ fontSize: "0.8em;" }}
            sx={{ m: 1, minWidth: 120 }}
            size="small"
          >
            <InputLabel style={{ color: "white" }}>Language</InputLabel>
            <Select
              style={{ color: "white" }}
              value={language}
              label="Language"
              onChange={handleChange}
            >
              <MenuItem value={"Java"}>Java</MenuItem>
            </Select>
          </FormControl>
          <button
            style={{ display: isConnectedRef.current ? "none" : "" }}
            className="run-btn"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            onClick={handleSubmitButtonClick}
          >
            <img src="/images/icon/run_code.png" />
            <p style={{ display: isButtonHovered ? "inline-block" : "none" }}>
              코드를 실행합니다.
            </p>
          </button>
          <button
            style={{ display: isConnectedRef.current ? "" : "none" }}
            className="stop-btn"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            onClick={handleCancelButtonClick}
          >
            <img src="/images/icon/stop_code.png" />
            <p style={{ display: isButtonHovered ? "inline-block" : "none" }}>
              실행을 중지합니다.
            </p>
          </button>
        </div>
      </div>
      <Editor
        height={editorHeight}
        defaultLanguage={codeLanguage.toLowerCase()}
        onMount={initEditor}
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
    </CssWrapper>
  );
};

export default CodeEditor;
