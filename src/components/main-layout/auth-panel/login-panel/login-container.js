import React from "react";
import { withRouter } from "react-router-dom";

import "./login-container.css";

class LoginContainer extends React.Component {
  submitForm(e) {
    e.preventDefault();
    this.props.history.push("/home");
  }

  render() {
    return (
      <div className="form-login">
        <div className="form-top">
          <h3>Login Now.</h3>
          <p>Enter Your Credentials to Login:</p>
        </div>
        <div className="form-bottom">
          <form onSubmit={this.submitForm.bind(this)}>
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
            <div className="btn-wrapper">
              <button className="btn btn-primary btn-submit">
                Let Me EnTer!
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginContainer);
