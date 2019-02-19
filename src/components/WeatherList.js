import React from "react";
import Moment from "react-moment";
import { Container } from "reactstrap";
import "../css/App.css";

export default function WeatherList(props) {
  console.log(props);
  return (
    <div className="weather_list">
      <Moment format="dddd">{props.weatherItem.dt_txt}</Moment>
      <br />
      <img
        src={`http://openweathermap.org/img/w/${
          props.weatherItem.weather[0].icon
        }.png`}
      />
      <br />
      {Math.round(props.weatherItem.main.temp)}
      <span>&deg;F</span>
    </div>
  );
}
