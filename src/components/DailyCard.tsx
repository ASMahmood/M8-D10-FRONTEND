import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { dailyStructure } from "../types/interfaces";
import {
  convertUnixToReadble,
  kelvinToCelsius,
  convertUnixToDate,
} from "../functions";
import "../style/DailyCard.css";

export default function DailyCard(props: dailyStructure) {
  return (
    <Card>
      <div className="dailyTop d-flex align-items-center ">
        <Card.Img
          variant="top"
          className="img-flid dayImg"
          src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
        />
        <h5>
          {props.index === 0 ? "Tomorrow " : convertUnixToDate(props.dt) + " "}
        </h5>
        <span className="ml-3">AVG {kelvinToCelsius(props.temp.day)}°C</span>
        <span className="ml-4">
          {kelvinToCelsius(props.temp.max)}°C to{" "}
          {kelvinToCelsius(props.temp.min)}°C
        </span>
      </div>
      <Card.Body className="d-flex dailyInfo align-items-start justify-content-between">
        <div className="clouds d-flex flex-column align-items-center">
          <span>CLOUD COVERAGE</span>
          <h5>{props.clouds}%</h5>
        </div>
        <div className="humidity d-flex flex-column align-items-center">
          <span>HUMIDITY</span>
          <h5>{props.humidity}%</h5>
        </div>
        <div className="sunrise d-flex flex-column align-items-center">
          <span>SUNRISE</span>
          <h5>{convertUnixToReadble(props.sunrise + props.timezone_offset)}</h5>
        </div>
        <div className="sunset d-flex flex-column align-items-center">
          <span>SUNSET</span>
          <h5>{convertUnixToReadble(props.sunset + props.timezone_offset)}</h5>
        </div>
        <div className="windInfo d-flex flex-column align-items-center">
          <span>WIND SPEED</span>
          <h6 className="mb-0">{props.wind_deg}°</h6>
          <h6>{props.wind_speed}m/s</h6>
        </div>
      </Card.Body>
    </Card>
  );
}
