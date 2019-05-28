import React from "react";

import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Player from "./Player";

import { Route } from 'react-router-dom'

import Categories from './Categories';
import Featured from './Featured';
import NewReleases from './NewReleases';
import CategoryPlaylists from './CategoryPlaylists';
import Playlist from './Playlist'
import Profile from './Profile'
import SearchResult from './SearchResult'


class MainContent extends React.Component {

  render() {
    return (
      <div>
        <Topbar />
        <Sidebar />
        <div className="main-content">
          <Route
            exact
            path="/content/categories"
            component={Categories}
          />
          <Route
            exact
            path="/content/categories/:name"
            component={CategoryPlaylists}
          />
          <Route
            exact
            path="/content/featured"
            component={Featured}
          />
          <Route
            exact
            path="/content/new-releases"
            component={NewReleases}
          />
          <Route
            exact
            path="/content/playlist/:id"
            component={Playlist}
          />
          <Route
            exact
            path="/content/profile"
            component={Profile}
          />
          <Route
            exact
            path="/content/search"
            component={SearchResult}
          />
        </div>
        <Player />
      </div>
    )
  }
}

export default MainContent;
