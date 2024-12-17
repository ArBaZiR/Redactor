//
import { useState } from "react";
//
export default function LanguageSelector({
  languageArray,
  index,
  setIndex,
  setLanguage,
}: {
  languageArray: any;
  index: number;
  setIndex: Function;
  setLanguage: Function;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="text-start relative text-white">
        <div
          className={`flex flex-col gap-[5px] h-[600px] overflow-auto rounded top-[70px] left-[35px] fixed bg-neutral-700 z-10 px-[30px] py-[10px] ${
            !isOpen && "opacity-0 hidden"
          }`}
        >
          {languageArray.map(
            (
              el: {
                language: string;
              },
              i: number
            ) => (
              <button
                key={i}
                className={`px-[20px] py-[10px] rounded ${
                  i == index ? "bg-neutral-600" : "bg-zinc-800"
                }`}
                onClick={() => (
                  setIndex(i), setIsOpen(false), setLanguage(el.language)
                )}
              >
                {el.language}
              </button>
            )
          )}
        </div>
        <button
          className={`w-[135px] py-[10px] rounded text-white ease-linear duration-75 ${
            isOpen ? "bg-neutral-600" : "bg-neutral-800"
          }`}
          onClick={() => setIsOpen((e) => !e)}
        >
          {languageArray[index].language}
        </button>
      </div>
    </div>
  );
}
