import React, { useState, useEffect, useRef, useCallback } from "react";
import { Editor } from "@monaco-editor/react";

import { CodeEditorStyles as CssWrapper } from "../../../styles/codingtest/CodeEditorStyles";

const CodeEditor = ({ codeLanguage, value, setValue }) => {
  const editorRef = useRef(null);
  const headerElemRef = useRef(null);
  const [editorHeight, setEditorHeight] = useState("100%");

  const initEditor = useCallback((editor) => {
    editorRef.current = editor;
    editor.focus();

    const resizeObserver = new ResizeObserver(() => {
      editor.layout();
    });
    resizeObserver.observe(document.body);
  }, []);

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
        <span>INPUT</span>
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
