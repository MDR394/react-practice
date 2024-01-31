import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="bg-fuchsia-700 rounded-xl my-4 p-6 flex justify-center gap-5">
        <NavLink
          className={({ isActive }) =>
            `text-xl ${
              isActive ? "text-gray-100" : "text-gray-300"
            } hover:text-gray-100`
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-xl ${
              isActive ? "text-gray-100" : "text-gray-300"
            } hover:text-gray-100`
          }
          to={"/userapi"}
        >
          User Api
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `text-xl ${
              isActive ? "text-gray-100" : "text-gray-300"
            } hover:text-gray-100`
          }
          to={"/todo"}
        >
          Todo
        </NavLink>
      </nav>
    </div>
  );
}
