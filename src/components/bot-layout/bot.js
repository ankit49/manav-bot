import React, { Component } from "react";

import "./bot.css";

class Bot extends Component {
  componentDidMount() {
    var sc = document.createElement("script");
    sc.setAttribute("src", "/scripts/settings.js");
    sc.setAttribute("type", "text/javascript");
    document.head.appendChild(sc);
    var sct = document.createElement("script");
    sct.setAttribute("src", "/scripts/web-sdk.js");
    sct.setAttribute("type", "text/javascript");
    sct.setAttribute("onload", "initSdk('Bots')");
    document.head.appendChild(sct);
  }
  render() {
    return <div className="Chat-container"></div>;
  }
}
export default Bot;
