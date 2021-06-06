import React, { Component } from "react";
import BotsWebsocket from "../../helpers/bots-websocket";

import "./bot.css";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: [],
    };
    const addMessageCallback = (data) => {
      console.log("received content - " + JSON.stringify(data));
      this.setState({
        messages: [...this.state.messages, data],
      });
    };
    this.botsWebsocket = new BotsWebsocket(addMessageCallback);
    this.sendMessage = (ev) => {
      ev.preventDefault();
      this.setState({
        messages: [...this.state.messages, this.state.message],
      });
      this.botsWebsocket.sendToBot(this.state.message);
      // reset the text input
      this.setState({
        message: "",
      });
    };
  }
  render() {
    return (
      <div className="Chat-container">
        <div className="Chat-row">
          <div className="Chat-column">
            <div className="Chat-card">
              <div className="Chat-body">
                <div className="Chat-title">Financial React Based Chatbot</div>
                <div className="Chat-messages">
                  {" "}
                  {this.state.messages.map((message, index) => {
                    if (index % 2 === 0) {
                      return (
                        <div className="Chat-bubble-left" key={index}>
                          {message}{" "}
                        </div>
                      );
                    } else {
                      return (
                        <div className="Chat-bubble-right" key={index}>
                          {message}
                        </div>
                      );
                    }
                  })}{" "}
                </div>
              </div>
              <div className="Chat-footer">
                {" "}
                <form>
                  <input
                    type="text"
                    size="40"
                    placeholder="Message"
                    className="Chat-input"
                    value={this.state.message}
                    onChange={(ev) =>
                      this.setState({ message: ev.target.value })
                    }
                  />
                  <button onClick={this.sendMessage} className="Chat-submit">
                    Summit
                  </button>
                </form>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Chat;
