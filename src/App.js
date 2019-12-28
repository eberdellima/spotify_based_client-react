import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import MainContent from "./components/MainContent";

import { client_id, client_secret, getRedirectURL } from './configs/spotify-app'

import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      client_id,
      client_secret
    }
  }

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
