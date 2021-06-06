import React from "react";

import "./intro-panel.css";

class IntroComponent extends React.Component {
  render() {
    return (
      <div className="col-md-6 font1 intro-content">
        <h1> Manav Bot </h1>
        <div className="description">
          <p>
            {" "}
            <strong> !! Welcome to Manav Bot !! </strong> A Smart Chat-Bot.{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default IntroComponent;
