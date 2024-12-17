// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CodeEditor from "./CodeEditor.tsx";
import "./styles/tailwind.css";

createRoot(document.getElementById("root")!).render(
  <>
    <CodeEditor />
  </>
);
