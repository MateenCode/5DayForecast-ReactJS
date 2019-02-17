import React from "react";
import "./App.css";
import Form from "./components/Form";
import axios from "axios";

class App extends React.Component {
  state = {
    currentWeather: {},
    weatherList: []
  };

  getWeather = (weather, city) => {
    const API_KEY = "74a0d65d1017ee174d9493121f8fca0b";
    const country = "US";
    this.setState({
      currentWeather: weather
    });
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=imperial`
      )
      .then(res =>
        this.setState({
          weatherList: [
            res.data.list[5],
            res.data.list[13],
            res.data.list[21],
            res.data.list[28],
            res.data.list[32]
          ]
        })
      );
  };

  render() {
    return (
      <div className="App">
        <Form getWeather={this.getWeather} />
      </div>
    );
  }
}

export default App;
