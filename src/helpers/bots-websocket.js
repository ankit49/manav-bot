import ReconnectingWebSocket from "reconnecting-websocket";
class BotsWebsocket {
  constructor(addMessageCallback) {
    debug("constructor: ");
    this.addMessageCallback = addMessageCallback;
    this.channel = "CHANNEL-ID-HERE";
    this.userId = "1";
    this.websocketConnectionUrl = "ws://localhost:8888/ext/apps/chat/ws";
    this.connect();
  }
  connect() {
    let self = this;
    let connection = this.websocketConnectionUrl + "?user=" + this.userId;
    debug("initWebSocketIfNeeded: connection " + connection);
    this.ws = new ReconnectingWebSocket(connection);
    this.ws.onmessage = function (evt) {
      debug("Message received: " + evt.data);
      let response = JSON.parse(evt.data);
      if (response.body && response.body.messagePayload) {
        const messagePayload = response.body.messagePayload;
        // ES6 Note the use of Backquotes
        debug(`messagePayload is ${messagePayload.text}`);
        var test = messagePayload.text;
        let messageReceived = "";
        // check if its an array or not
        if (test.indexOf("textposition") !== -1) {
          messageReceived = JSON.parse(test);
        } else {
          messageReceived = JSON.stringify(messagePayload.text);
        }
        self.addMessageCallback(messageReceived);
      } else if (response.error) {
        debug("FAIL:" + response.error.message);
        self.addMessageCallback(response.error.message);
      }
    };
  }
  sendToBot(message) {
    const messageToBot = message
      ? {
          to: {
            type: "bot",
            id: this.channel,
          },
          messagePayload: {
            type: "text",
            text: message,
          },
        }
      : {
          to: {
            type: "bot",
            id: this.channel,
          },
        };
    const ws = this.ws;
    // wait for websocket until open
    waitForSocketConnection(this.ws, function () {
      ws.send(JSON.stringify(messageToBot));
      debug("Message sent: " + JSON.stringify(messageToBot));
    });
  }
}
// debug method
const debug = (message) => console.log(message);
const waitForSocketConnection = (socket, callback) => {
  setTimeout(function () {
    if (socket.readyState === 1) {
      callback();
    } else {
      debug("waiting for connection...");
      waitForSocketConnection(socket, callback);
    }
  }, 1000); // wait 1 second for the connection...
};
export default BotsWebsocket;
