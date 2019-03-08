import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import moment from "moment";

// Components
import Form from "./components/layout/Form";
import Display from "./components/layout/Display";
import CurrentWeather from "./components/CurrentWeather";
import WeatherList from "./components/WeatherList";
import WeatherMap from "./components/WeatherMap";

const API_KEY = "74a0d65d1017ee174d9493121f8fca0b";

class App extends Component {
  state = {
    currentWeather: {},
    weatherList: [],
    viewMap: false,
    center: {
      lat: 0,
      lng: 0
    }
  };

  changeWeather = newWeather => {
    this.setState(state => ({
      currentWeather: {
        ...state.currentWeather,
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
    }));
  };

  getWeather = (weather, city, coords) => {
    const country = "US";
    this.setState({
      currentWeather: weather,
      center: {
        lat: coords.lat,
        lng: coords.lng
      }
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

  handleMap = () => {
    this.setState({
      viewMap: true
    });
  };

  render() {
    const { weatherList, viewMap, currentWeather } = this.state;

    return weatherList.length === 0 ? (
      <div className="App">
        <Form getWeather={this.getWeather} />
        <Display />
      </div>
    ) : viewMap === true ? (
      <div className="App">
        <Form getWeather={this.getWeather} />
        <div className="display">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDog654Ev-4EBccDN_cuPBVAXM1qWTYKxk"
            }}
            defaultCenter={this.state.center}
            defaultZoom={11}
          >
            <WeatherMap
              lat={34.170783199999995}
              lng={-118.3971237}
              text={"Kreyser Avrora"}
            />
          </GoogleMapReact>
        </div>
      </div>
    ) : (
      <div className="App">
        <Form getWeather={this.getWeather} />
        <div className="display">
          <Container fluid>
            <Row>
              <CurrentWeather
                weather={currentWeather}
                handleMap={this.handleMap}
              />
            </Row>
            <br />
            <Row>
              {weatherList.map(weatherItem => (
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

export default App;
