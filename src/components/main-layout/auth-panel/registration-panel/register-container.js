import React from "react";

import "./register-container.css";

class RegisterContainer extends React.Component {
  render() {
    return (
      <div className="form-register">
        <div className="form-top">
          <h3>Register Now.</h3>
          <p>Fill in the form below to get instant access:</p>
        </div>
        <div className="form-bottom">
          <form action="#" method="post">
            <div className="form-group">
              <input
                type="text"
                name="register-name"
                placeholder="Name..."
                className="form-control"
                id="register-name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="register-email"
                placeholder="Email..."
                className="form-control"
                id="register-email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="register-password"
                placeholder="Password..."
                className="form-control"
                id="register-password"
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

export default RegisterContainer;
