//
import { execudeCode } from "./api";
//

type TypeProps = {
  editorRef: {
    current: {
      getValue: Function;
    };
  };
  language: {
    language: string;
    version: string;
    title: string;
  };
  setOutput: Function;
  setIsError: Function;
};

export default function RunCode({
  editorRef,
  language,
  setOutput,
  setIsError,
}: TypeProps) {
  //

  const runCode = async () => {
    const sourseCode = editorRef.current.getValue();
    if (!sourseCode) return;
    try {
      const result = await execudeCode(
        language.language,
        sourseCode,
        language.version
      );
      setOutput(result.output);
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={() => runCode()}
      className="px-[30px] py-[10px] rounded text-white bg-green-900 active:bg-green-950 ease-linear duration-75"
    >
      Run
    </button>
  );
}
