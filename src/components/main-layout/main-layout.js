import React from "react";
import IntroComponent from "./intro-panel/intro-panel";
import AuthContainer from "./auth-panel/auth-panel";

import "./main-layout.css";

class MainContainer extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="container">
          <div className="row">
            <IntroComponent />
            <AuthContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
