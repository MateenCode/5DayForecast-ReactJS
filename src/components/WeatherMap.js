import React from "react";
import { TileLayer } from "react-leaflet";

export default function WeatherMap(props) {
  return (
    <TileLayer
      url={`https://tile.openweathermap.org/map/${
        props.layerName
      }/{z}/{x}/{y}.png?appid=74a0d65d1017ee174d9493121f8fca0b`}
      attribution='&copy; <a href="https://openweathermap.org/">openweathermap</a> contributors'
    />
  );
}
