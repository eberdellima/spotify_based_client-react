import React from "react";
import Login from "./components/Login";
import MainContent from "./components/MainContent";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      client_id: '5a63290c911e4820895c8ad128ee3f82',
      client_secret: '1c4cd97215134f3d9a58b2afac3a6509',
    }
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path='/login' render={() => {
          window.location.href= `https://accounts.spotify.com/authorize?response_type=token&client_id=${this.state.client_id}&redirect_uri=https://spotify-based-client-react.herokuapp.com/content/categories&scope=user-read-private%20user-read-email&show_dialog=true`;
          return null;
        }}/>
        <Route path="/content" component={MainContent}/>
      </Router>
    );
  }
}

export default App;
