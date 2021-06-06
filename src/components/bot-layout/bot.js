import React from "react";
import { Helmet } from "../../helpers/web-sdk";

import "./bot.css";

class BotContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi</h1>
        <Helmet>
          <meta charset="utf-8"></meta>
          <script src="../../helpers/settings" type="text/javascript" />
          <script
            src="../../helpers/web-sdk"
            onload="initSdk('Bots')"
            type="text/javascript"
          />
        </Helmet>
      </div>
    );
  }
}

export default BotContainer;
