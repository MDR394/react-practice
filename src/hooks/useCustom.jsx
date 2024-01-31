import React, { useEffect, useState } from "react";

function useCustom(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  return [data];
}

export default useCustom;
