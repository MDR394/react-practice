import React, { useCallback, useEffect, useState, useRef } from "react";

export const Pass_gen = () => {
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const passwordRef = useRef(null);
  const PassGerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "{[}]*&^%$#@!-+/|";
    for (let i = 1; i <= length; i++) {
      let genrate = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(genrate);
    }
    setPassword(pass);
  }, [length, number, char, setPassword]);

  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    PassGerator();
  }, [length, number, char, PassGerator]);
  return (
    <>
      <div className="mt-8 flex flex-col justify-center p-20 bg-gray-950">
        <h1>Password Genrator</h1>
        <div className="bg-slate-900 p-20 rounded-xl">
          <input
            type="text"
            className="h-11 w-96 text-lg rounded-lg pl-3"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button onClick={copyPass} className="bg-blue-500 -ml-4">
            Copy
          </button>
          <div className="mt-4">
            <label>
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="mr-4"
              />
              <span className="text-lg">Length: {length}</span>
            </label>

            <label>
              <input
                type="checkbox"
                className="mr-2 ml-10"
                onChange={() => setNumber((pre) => !pre)}
              />
              <span className="text-lg">Number</span>
            </label>

            <label>
              <input
                type="checkbox"
                className="mr-2 ml-10"
                onChange={() => setChar((pre) => !pre)}
              />
              <span className="text-lg">Character</span>
            </label>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
