import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../css/CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <Container className="main">
      <div className="header_key">
        <span className="h2">
          {props.weather.city}, {props.weather.country}
        </span>
        <p className="text-secondary">
          {props.weather.day}, {props.weather.date}
          <br />
          {props.weather.description}
        </p>
      </div>
      <Row>
        <Col>
          <img src={props.weather.img} alt="" />
          <span className="temp_key">{props.weather.temp}°</span>
        </Col>
        <Col>
          <p className="text-secondary">
            <span className="text-white h6">Temperature: </span>
            {props.weather.temp_max}° ~ {props.weather.temp_min}°
            <br />
            <span className="text-white h6">Humidity: </span>
            {props.weather.humidity}%
            <br />
            <span className="text-white h6">Wind: </span>
            {props.weather.wind} mph
          </p>
        </Col>
      </Row>
    </Container>
  );
}
