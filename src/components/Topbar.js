import React from "react";

import "../static/topbar.scss";

const Topbar = () => {
  const search = e => {
    e.preventDefault();
    console.log(1)
    if (e.keyCode === 13) {
      let value = e.target.value;
      e.target.value = "";
      window.location.href ="https://spotify-based-client-react.herokuapp.com/content/search?q=" + value
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
