import React from "react";
import { Route, Switch } from "react-router-dom";

import { getRedirectURL } from './spotify-app'

import Login from '../components/Login';
import Categories from '../components/Categories';
import CategoryPlaylists from '../components/CategoryPlaylists';
import Featured from '../components/Featured';
import NewReleases from '../components/NewReleases';
import Playlist from '../components/Playlist';
import Profile from '../components/Profile';
import SearchResult from '../components/SearchResult';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Player from "../components/Player";



export const ROUTES = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: Login
  },
  {
    path: '/login',
    key: 'LOGIN',
    exact: true,
    component: () => {
      window.location.href = getRedirectURL()
      return null;
    }
  },
  {
    path: '/content',
    key: 'CONTENT',
    // exact: true,
    component: (props)  => {
      return (
        <div>
          <Topbar/>
          <Sidebar/>
          <div className="main-content">
            <RenderRoutes {...props} />
          </div>
          <Player/>
        </div>
      )
    } ,
    routes: [
      {
        path: '/content/categories',
        key: 'CATEGORIES',
        exact: true,
        component: Categories
      },
      {
        path: '/content/categories/:name',
        key: 'CATEGORY',
        exact: true,
        component: CategoryPlaylists
      },
      {
        path: '/content/featured',
        key: 'FEATURED',
        exact: true,
        component: Featured
      },
      {
        path: '/content/new-releases',
        key: 'NEW_RELEASES',
        exact: true,
        component: NewReleases
      },
      {
        path: '/content/playlist/:id',
        key: 'PLAYLIST',
        exact: true,
        component: Playlist
      },
      {
        path: '/content/profile',
        key: 'PROFILE',
        exact: true,
        component: Profile
      },
      {
        path: '/content/search',
        key: 'SEARCH_RESULT',
        exact: true,
        component: SearchResult
      },
    ]
  }
]

function RoutesWithSubRoutes(route) {
  console.log(route)
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  )
}


export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {
        routes.map(route => {
          return <RoutesWithSubRoutes key={route.key} {...route} />
        })
      }
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  )
}