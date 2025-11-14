import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-black font-bold" : `${className} font-semibold`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
