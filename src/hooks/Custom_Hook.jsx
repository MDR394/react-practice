import React from "react";
import useCustom from "./useCustom";

function Custom_Hook() {
  const [data] = useCustom("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
      {data &&
        data.map((val) => {
          return (
            <>
              <h2>
                {val.id}: {val.title}
              </h2>
              <br />
              <br />
            </>
          );
        })}
    </div>
  );
}

export default Custom_Hook;
