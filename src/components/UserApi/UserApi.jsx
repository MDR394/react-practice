import React, { useEffect, useState } from "react";
import Custom_Hook from "../../hooks/Custom_Hook";
import { Card_Data } from "../Card_Data";
import { Card } from "../Card";

export default function () {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div>
      {/* <Custom_Hook /> */}
      <h1 className="text-xl text-center mt-6">
        These are Dummy Users here through: fetch("https://dummyjson.com/users")
      </h1>
      <div className="flex gap-8 justify-center flex-wrap mt-6">
        {users &&
          users.map(({ firstName, userAgent, image, domain }, key) => (
            <Card
              key={key}
              name={firstName}
              detail={userAgent}
              src={image}
              btn_text={domain}
            />
          ))}
      </div>
      <h1 className="text-xl text-center my-6">
        These are Dummy Users here through: Custom Users
      </h1>
      <div className="flex gap-8 justify-center flex-wrap">
        {Card_Data.map(({ name, detail, src, btn_text }, key) => (
          <Card
            key={key}
            name={name}
            detail={detail}
            src={src}
            btn_text={btn_text}
          />
        ))}
      </div>
    </div>
  );
}
