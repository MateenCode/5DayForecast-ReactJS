import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Button, Input, Alert } from "reactstrap";
import { MyLocation } from "@material-ui/icons";
import axios from "axios";
import moment from "moment";
import "../css/Weather.css";

const API_KEY = "74a0d65d1017ee174d9493121f8fca0b";

export default class Form extends Component {
  state = {
    text: "",
    error: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onDismiss = () => {
    this.setState({
      error: !this.state.error
    });
  };

  handleSubmit = event => {
    const country = "US";
    const cityName = this.state.text;
    event.preventDefault();
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${country}&appid=${API_KEY}&units=imperial`
      )
      .then(res => {
        this.props.getWeather(
          {
            city: res.data.name,
            country: res.data.sys.country,
            day: moment().format("dddd"),
            date: moment().format("MMMM Do YYYY"),
            img: `http://openweathermap.org/img/w/${
              res.data.weather[0].icon
            }.png`,
            temp: Math.round(res.data.main.temp),
            description: res.data.weather[0].description,
            temp_max: Math.round(res.data.main.temp_max),
            temp_min: Math.round(res.data.main.temp_min),
            humidity: res.data.main.humidity,
            wind: Math.round(res.data.wind.speed)
          },
          cityName
        );
        this.setState({
          text: ""
        });
      })
      .catch(() => {
        this.setState({
          error: !this.state.error
        });
      });
  };

  handleLocation = () => {
    let lat = 0;
    let long = 0;
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=imperial`
        )
        .then(res => {
          const cityName = res.data.name;
          this.props.getWeather(
            {
              city: res.data.name,
              country: res.data.sys.country,
              day: moment().format("dddd"),
              date: moment().format("MMMM Do YYYY"),
              img: `http://openweathermap.org/img/w/${
                res.data.weather[0].icon
              }.png`,
              temp: Math.round(res.data.main.temp),
              description: res.data.weather[0].description,
              temp_max: Math.round(res.data.main.temp_max),
              temp_min: Math.round(res.data.main.temp_min),
              humidity: res.data.main.humidity,
              wind: Math.round(res.data.wind.speed)
            },
            cityName
          );
        })
        .then(() => {
          this.setState({
            error: !this.state.error
          });
        });
    });
  };

  render() {
    return (
      <React.Fragment>
        <Alert color="warning" isOpen={this.state.error}>
          <span className="location text-info" onClick={this.handleLocation}>
            Current Location <MyLocation />
          </span>
        </Alert>
        <form className="search-bar pt-5" onSubmit={this.handleSubmit}>
          <InputGroup className="search-group">
            <Input
              className="search-field"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="Enter City..."
            />
            <InputGroupAddon addonType="append">
              <Button color="dark" onSubmit={this.handleSubmit}>
                <i className="fas fa-search" />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </React.Fragment>
    );
  }
}
