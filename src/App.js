import React from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";

import Form from "./components/Form";
import Display from "./components/Display";
import CurrentWeather from "./components/CurrentWeather";
import WeatherList from "./components/WeatherList";

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
    if (this.state.weatherList.length === 0) {
      return (
        <div className="App">
          <Form getWeather={this.getWeather} />
          <Display />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Form getWeather={this.getWeather} />
          <div className="display">
            <Container>
              <Row>
                <CurrentWeather weather={this.state.currentWeather} />
              </Row>
              <Row>
                <WeatherList />
              </Row>
            </Container>
          </div>
        </div>
      );
    }
  }
}

export default App;
