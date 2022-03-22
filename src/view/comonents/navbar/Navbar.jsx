import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-200 flex justify-between items-center px-10">
      <span className="btn btn-ghost normal-case text-xl">To Do List</span>
      <div>
        <ul className="flex gap-6 mr-16">
          <li className="text-xl">
            <NavLink
              className={(data) =>
                data.isActive ? "text-accent" : "text-content"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              className={(data) =>
                data.isActive ? "text-accent" : "text-content"
              }
              to="/info"
            >
              info
            </NavLink>
          </li>
        </ul>
        <label className="swap swap-rotate">
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};
