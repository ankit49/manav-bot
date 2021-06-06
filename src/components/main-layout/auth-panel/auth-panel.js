import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import authAction from "../../../actions/auth-actions";
import LoginContainer from "./login-panel/login-container";
import RegisterContainer from "./registration-panel/register-container";

import "./auth-panel.css";

class AuthContainer extends React.Component {
  componentDidMount() {
    this.sideLink.classList.add("right");
  }
  openRegisterFunc = () => {
    this.props.setRegisterActive();
    this.sideLink.classList.remove("right");
    this.sideLink.classList.add("left");
  };
  openLoginFunc = () => {
    this.props.setLoginActive();
    this.sideLink.classList.remove("left");
    this.sideLink.classList.add("right");
  };
  render() {
    const { loginVisibility } = this.props.auth;
    const current = loginVisibility ? "Register" : "Login";
    const currentActive = loginVisibility ? "login" : "register";
    return (
      <div className="col-md-6 form-box font2">
        <div className="frame">
          <div className="container">
            <div className="all-forms">
              {loginVisibility ? <LoginContainer /> : <RegisterContainer />}
            </div>
          </div>
          <SideLink
            current={current}
            currentActive={currentActive}
            containerRef={(ref) => (this.sideLink = ref)}
            onClick={
              current === "Login" ? this.openLoginFunc : this.openRegisterFunc
            }
          />
        </div>
      </div>
    );
  }
}
const SideLink = (props) => {
  return (
    <div className="side-link" ref={props.containerRef} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

const structuredSelector = createStructuredSelector({
  auth: (state) => state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  setRegisterActive: () => dispatch(authAction.setRegisterActive()),
  setLoginActive: () => dispatch(authAction.setLoginActive()),
});

export default connect(structuredSelector, mapDispatchToProps)(AuthContainer);
