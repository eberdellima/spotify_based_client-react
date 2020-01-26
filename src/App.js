import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import MainContent from "./components/MainContent";

import { getRedirectURL } from './configs/spotify-app'

import "./App.css";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path='/login' render={() => {
          window.location.href = getRedirectURL()
          return null;
        }}/>
        <Route path="/content" component={MainContent}/>
      </Router>
    );
  }
}

export default App;
