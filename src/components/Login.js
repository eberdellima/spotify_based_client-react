import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {

  render() {

    return (
      <div>
        <div id="login" style={{textAlign:'center'}}>
          <h1>First, login to Spotify</h1>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    );
  }
};

export default Login;
