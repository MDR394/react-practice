import React from "react";
import { useState } from "react";
import { Pass_gen } from "./components/Pass_gen";

function App() {
  const [count, setCount] = useState(0);
  const [color, setcolor] = useState("black");
  return (
    <div
      style={{ backgroundColor: color }}
      className="bg-slate-600 mx-auto flex flex-col"
    >
      <section className="flex flex-col items-center my-7">
        <h2 className="text-center font-mono text-xl flex">Color Changer</h2>
        <div className="flex gap-4 mt-4">
          <button
            style={{ backgroundColor: "#F28585" }}
            onClick={() => setcolor("#F28585")}
          >
            #F28585
          </button>
          <button
            style={{ backgroundColor: "#B4FF9F" }}
            onClick={() => setcolor("#B4FF9F")}
          >
            #B4FF9F
          </button>
          <button
            style={{ backgroundColor: "#B2C8BA" }}
            onClick={() => setcolor("#B2C8BA")}
          >
            #B2C8BA
          </button>
          <button
            style={{ backgroundColor: "#86A789" }}
            onClick={() => setcolor("#86A789")}
          >
            #86A789
          </button>
        </div>
      </section>
      <Pass_gen />
    </div>
  );
}

export default App;
