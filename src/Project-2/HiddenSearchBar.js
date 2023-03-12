import React, { useState } from "react";
import "./HiddenSearchBar.css";
import { FiSearch } from "react-icons/fi";

export default function HiddenSearchBar() {
  const [state, setState] = useState(false);
  const HandleSearch = () => {
    setState(!state);
  };
  return (
    <>
      <div className={state ? "Search active" : "Search"}>
        <input className="input" type="text" placeholder="Search.." />
        <button onClick={HandleSearch} className="btn">
          <FiSearch />
        </button>
      </div>
    </>
  );
}
