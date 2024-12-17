//

export const execudeCode = async (
  language: string,
  sourseCode: Function,
  version: string
) => {
  const response = fetch("https://emkc.org/api/v2/piston/execute", {
    method: "POST",
    body: JSON.stringify({
      version: version,
      language: language,
      files: [{ name: "my-cool_code.js", content: sourseCode }],
    }),
  })
    .then((data) => data.json())
    .then((data) => data.run);
  return response;
};
