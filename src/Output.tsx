//

//

export default function Output({
  output,
  isError,
}: {
  output: null;
  isError: boolean;
}) {
  //

  return (
    <div className="px-[10px] bg-neutral-800">
      <div
        className={`${output && "w-0"} ${
          !isError ? "text-white" : "text-red-600"
        }`}
      >
        {output ? output : `Click "Run Code" to see the output here `}
      </div>
    </div>
  );
}
