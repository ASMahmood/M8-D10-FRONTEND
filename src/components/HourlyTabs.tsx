import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { hourlyStructure } from "../types/interfaces";
import {
  convertUnixToReadble,
  kelvinToCelsius,
  convertUnixToDate,
} from "../functions";

export default function HourlyTabs(props: hourlyStructure) {
  return (
    <div className="dailyTop d-flex align-items-center">
      <Card.Img
        variant="top"
        className="img-flid hourImg"
        src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
      />

      <h5 className="ml-3">
        {convertUnixToReadble(props.dt)} - {convertUnixToDate(props.dt)}
      </h5>
      <h5 className="ml-4">{kelvinToCelsius(props.temp)}°C</h5>
      {/* <h5 className="ml-3">{props.weather[0].main.toUpperCase()}</h5> */}
    </div>
  );
}
