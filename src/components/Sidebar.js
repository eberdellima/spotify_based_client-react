import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../static/sidebar.scss";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear()
    };
  }

  render() {
    const year = this.state.year;
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
    );
  }
}

export default Sidebar;
