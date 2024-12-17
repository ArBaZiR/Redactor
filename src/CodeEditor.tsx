// React
import { useState, useRef, useEffect } from "react";
// MonacoEditor
import { Editor } from "@monaco-editor/react";
// Components
import LanguageSelector from "./LanguageSelector";
import RunCode from "./runCode";
import Output from "./Output";

export default function CodeEditor() {
  const editorRef = useRef<any>();
  const [output, setOutput] = useState(null);
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(16);
  const [isError, setIsError] = useState(false);
  const [languageArray, setLanguageArray] = useState([]);
  const [language, setLanguage] = useState("javascript");

  useEffect(() => {
    fetch("https://emkc.org/api/v2/piston/runtimes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        const newArray = [];
        newArray.push(data);
        setLanguageArray(newArray[0]);
      });
  }, []);

  const onMount = (editor: object) => {
    editorRef.current = editor;
  };

  return (
    <main className="grid grid-rows-[auto_1fr] h-screen bg-neutral-900">
      {languageArray.length ? (
        <>
          <div className="flex ml-[50px] gap-x-[30px] gap-y-[20px] py-[15px] flex-wrap">
            <LanguageSelector
              languageArray={languageArray}
              index={index}
              setIndex={setIndex}
              setLanguage={setLanguage}
            />

            <RunCode
              editorRef={editorRef}
              language={languageArray[index]}
              setOutput={setOutput}
              setIsError={setIsError}
            />
            <button
              onClick={() => setOutput(null)}
              className="px-[30px] py-[10px] rounded text-white bg-slate-700 active:bg-slate-800 ease-linear duration-75"
            >
              Clear
            </button>
          </div>
          <div className="grid grid-cols-2 ">
            <Editor
              value={value}
              theme="vs-dark"
              language={language}
              onMount={onMount}
              onChange={(val: any) => setValue(val)}
            />
            <Output output={output} isError={isError} />
          </div>
        </>
      ) : (
        <div>Загрузка</div>
      )}
    </main>
  );
}
