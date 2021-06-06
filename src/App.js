import { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import MainContainer from "./components/main-layout/main-layout";
import HomeContainer from "./components/home-container/home-container";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={MainContainer} />
              <Route exact path="/home" component={HomeContainer} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
