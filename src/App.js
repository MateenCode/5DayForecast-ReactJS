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
      .then(res => {
        const data = res.data.list;
        data.forEach(eachWeather => {
          const weather = eachWeather.dt_txt.split(" ");
          if (weather[1] === "15:00:00") {
            this.setState({
              weatherList: [eachWeather, ...this.state.weatherList]
            });
          }
        });
      });
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
            <Container fluid>
              <Row>
                <CurrentWeather weather={this.state.currentWeather} />
              </Row>
              <br />
              <Row>
                {this.state.weatherList.map(weatherItem => (
                  <WeatherList key={weatherItem.dt} weatherItem={weatherItem} />
                ))}
              </Row>
            </Container>
          </div>
        </div>
      );
    }
  }
}

export default App;
