import React from "react";
import "../../css/Display.css";

export default function Display() {
  return (
    <div className="display-container">
      <div className="wrapper">
        <div className="sun" />
        <div className="cloud">
          <div className="cloud1">
            <ul>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
          <div className="cloud1 c_shadow">
            <ul>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </div>

        <div className="cloud_s">
          <div className="cloud1">
            <ul>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
          <div className="cloud1 c_shadow">
            <ul>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </div>

        <div className="cloud_vs">
          <div className="cloud1">
            <ul>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
          <div className="cloud1 c_shadow">
            <ul>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </div>
        <div className="haze" />
        <div className="haze_stripe" />
        <div className="haze_stripe" />
        <div className="haze_stripe" />
        <div className="thunder" />
        <div className="rain">
          <ul>
            <li />
            <li />
            <li />
          </ul>
        </div>
        <div className="sleet">
          <ul>
            <li />
            <li />
            <li />
          </ul>
        </div>
        <div className="text">
          <ul>
            <li>Mostly Sunny</li>
            <li>Partly Sunny</li>
            <li>Partly Cloudy</li>
            <li>Mostly Cloudy</li>
            <li>Cloudy</li>
            <li>Hazy</li>
            <li>Thunderstorm</li>
            <li>Rain</li>
            <li>Sleet</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
