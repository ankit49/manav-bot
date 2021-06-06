import React from "react";

import "./login-container.css";

class LoginContainer extends React.Component {
  validateLogin = () => {
    console.log("Hi I got clicked");
  };

  render() {
    return (
      <div className="form-login">
        <div className="form-top">
          <h3>Login Now.</h3>
          <p>Enter Your Credentials to Login:</p>
        </div>
        <div className="form-bottom">
          <form action="#" method="post" onSubmit={this.validateLogin}>
            <div className="form-group">
              <input
                type="text"
                name="login-username"
                placeholder="Username..."
                className="form-control"
                id="login-username"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="login-password"
                placeholder="Password..."
                className="form-control"
                id="login-password"
                required
              />
            </div>
            <div className="wrapper">
              <button type="submit" className="btn btn-primary btn-submit">
                Let Me EnTer!
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
