import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-3 mt-3 mb-10 flex flex-col items-center justify-center gap-4 rounded-2xl bg-blue-400 px-4 py-5 sm:flex-row sm:justify-between sm:px-8">
      <h2 className="text-lg font-bold sm:text-xl">Counter Dashboard</h2>

      <div className="flex items-center gap-6 sm:gap-10">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/history">History</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
