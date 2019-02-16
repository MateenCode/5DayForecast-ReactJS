import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

// const reducer = (state, action) => {};

export class Provider extends Component {
  state = {
    currentWeather: {
      city: undefined,
      country: undefined,
      day: undefined,
      date: undefined,
      img: undefined,
      temp: undefined,
      description: undefined,
      humidity: undefined,
      pressure: undefined,
      wind: undefined
    },
    weatherList: []
    // dispatch: action => {
    //   this.setState(state => reducer(state, action));
    // }
  };

  componentDidMount() {
    const API_KEY = "74a0d65d1017ee174d9493121f8fca0b";
    const country = "US";
    const city = "los angeles";
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=imperial`
      )
      .then(res =>
        this.setState({
          currentWeather: {
            city: res.data.city.country,
            country: res.data.city.name,
            day: "today",
            date: res.data.list[0].dt_txt,
            img: res.data.list[0].weather[0].icon,
            description: res.data.list[0].weather[0].description,
            humidity: res.data.list[0].main.humidity,
            pressure: res.data.list[0].main.pressure,
            wind: res.data.list[0].wind.speed
          },
          weatherList: res.data.list
        })
      );
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
