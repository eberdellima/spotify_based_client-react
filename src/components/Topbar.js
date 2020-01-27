import React from "react";

import "../static/topbar.scss";

const Topbar = () => {
  
  const search = e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      let value = e.target.value;
      e.target.value = "";
      window.location.href ="http://localhost:3000/content/search?q=" + value
    }
  };

  return (
    <div className="topbar">
      <form onSubmit={(e) => {e.preventDefault()}} >
        <input type="search" placeholder="Enter song name" onKeyUp={search} />
        <i className="search-icon" />
      </form>
    </div>
  );
};

export default Topbar;
