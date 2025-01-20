import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col md:flex-row justify-between py-3 mx-6">
      <div>
        <h1 className="text-3xl font-bold mb-1">QuickBite</h1>
        <h3 className="text-xl font-bold text-gray-600 mb-1">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
      </div>
      <div>
        <input
          type="search"
          name="search"
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-orange-500 text-sm rounded-lg outline-none w-full md:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;