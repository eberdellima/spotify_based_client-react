import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../static/sidebar.scss";

const Sidebar = () => {

  const date = new Date().getFullYear()
  const [year, setYear] = useState(date)

  return (
    <div className="sidebar">
      <p className="sidebar-header">Library</p>
      <ul className="sidebar-menu-list">
        <li>
          <NavLink to="/content/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink to="/content/featured">Featured</NavLink>
        </li>
        <li>
          <NavLink to="/content/new-releases">New Releases</NavLink>
        </li>
        <li>
          <NavLink to="/content/profile">Profile</NavLink>
        </li>
      </ul>
      <p className="copyright">&copy; {year} Valdio Veliu Designs</p>
    </div>
  )
}

export default Sidebar;
