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
    weatherList: [],
    viewMap: false
  };

  changeWeather = newWeather => {
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
        let data = res.data.list;
        this.setState({
          weatherList: data.filter(eachWeather => {
            let weather = eachWeather.dt_txt.split(" ");
            return weather[1] === "21:00:00";
          })
        });
      });
  };

  // handleMap = () => {
  //   this.setState(state => {

  //   })
  // };

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
                <CurrentWeather
                  weather={this.state.currentWeather}
                  handleMap={this.handleMap}
                />
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
