import React from "react";
import axios from "axios";
import moment from "moment";
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

  changeWeather = newWeather => {
    console.log(newWeather);
    this.setState({
      currentWeather: {
        ...this.state.currentWeather,
        day: moment(newWeather.dt_txt).format("dddd"),
        date: moment(newWeather.dt_txt).format("MMMM Do YYYY"),
        img: `http://openweathermap.org/img/w/${
          newWeather.weather[0].icon
        }.png`,
        temp: Math.round(newWeather.main.temp),
        description: newWeather.weather[0].description,
        temp_max: Math.round(newWeather.main.temp_max),
        temp_min: Math.round(newWeather.main.temp_min),
        humidity: newWeather.main.humidity,
        wind: Math.round(newWeather.wind.speed)
      }
    });
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
              weatherList: [...this.state.weatherList, eachWeather]
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
                  <WeatherList
                    key={weatherItem.dt}
                    weatherItem={weatherItem}
                    changeWeather={this.changeWeather.bind(this, weatherItem)}
                  />
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
