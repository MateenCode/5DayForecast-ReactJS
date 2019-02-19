import React from "react";
import Moment from "react-moment";
import "../css/Weather.css";

export default function WeatherList(props) {
  return (
    <div className="weather" onClick={props.changeWeather}>
      <div className="weather_list">
        <Moment format="dddd">{props.weatherItem.dt_txt}</Moment>
        <br />
        <img
          className="icon_list"
          src={`http://openweathermap.org/img/w/${
            props.weatherItem.weather[0].icon
          }.png`}
          alt=""
        />
        <br />
        {Math.round(props.weatherItem.main.temp)}
        <span>°F</span>
      </div>
    </div>
  );
}
