import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import "../css/Weather.css";

export default function WeatherList(props) {
  const { changeWeather, weatherItem } = props;
  const { dt_txt, weather, main } = weatherItem;
  return (
    <div className="weather" onClick={changeWeather}>
      <div className="weather_list">
        <Moment format="dddd">{dt_txt}</Moment>
        <br />
        <img
          className="icon_list"
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
          alt=""
        />
        <br />
        {Math.round(main.temp)}
        <span>°F</span>
      </div>
    </div>
  );
}

WeatherList.propTypes = {
  changeWeather: PropTypes.func.isRequired,
  weatherItem: PropTypes.object.isRequired
};
