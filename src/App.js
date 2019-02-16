import React from "react";
import { Provider } from "./context/context";
import "./App.css";

class App extends React.Component {
  state = {};

  render() {
    return (
      <Provider>
        <div className="App">app</div>
      </Provider>
    );
  }
}

export default App;
