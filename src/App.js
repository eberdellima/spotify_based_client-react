import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ROUTES, RenderRoutes} from './configs/routes'

import "./App.css";

class App extends React.Component {

  render() {
    return (
      <Router>
        <RenderRoutes routes={ROUTES} />
      </Router>
    );
  }
}

export default App;
