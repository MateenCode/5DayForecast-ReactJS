import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import axios from "axios";
import moment from "moment";

export default class Form extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    const API_KEY = "74a0d65d1017ee174d9493121f8fca0b";
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
            humidity: res.data.main.humidity,
            pressure: res.data.main.pressure,
            wind: Math.round(res.data.wind.speed)
          },
          cityName
        );
        this.setState({
          text: ""
        });
      });
  };

  render() {
    return (
      <form className="search-bar  pt-5" onSubmit={this.handleSubmit}>
        <InputGroup className="search-group">
          <Input
            className="search-field"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Enter City..."
          />
          <InputGroupAddon addonType="append">
            <Button outline onSubmit={this.handleSubmit}>
              <i className="fas fa-search" />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </form>
    );
  }
}
