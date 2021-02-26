import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { hourlyStructure } from "../types/interfaces";
import {
  convertUnixToReadble,
  kelvinToCelsius,
  convertUnixToDate,
} from "../functions";
import "../style/HourlyCard.css";

export default function HourlyCard(props: hourlyStructure) {
  return (
    <Card className="hourCard">
      <div className="dailyTop d-flex align-items-center ">
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
      <Card.Body className=" dailyInfo">
        <div className="rain d-flex flex-column align-items-center">
          <span>CHANCE OF RAIN</span>
          <h2>{Math.floor(props.pop * 100)}%</h2>
        </div>
        <div className="clouds d-flex flex-column align-items-center">
          <span>CLOUD COVERAGE</span>
          <h2>{props.clouds}%</h2>
        </div>
        <div className="humidity d-flex flex-column align-items-center">
          <span>HUMIDITY</span>
          <h2>{props.humidity}%</h2>
        </div>
        <div className="uv d-flex flex-column align-items-center">
          <span>UV INDEX</span>
          <h2>{props.uvi}</h2>
        </div>
        <div className="windInfo d-flex flex-column align-items-center">
          <span>WIND SPEED</span>
          <h5 className="mb-0">{props.wind_deg}°</h5>
          <h5>{props.wind_speed}m/s</h5>
        </div>
      </Card.Body>
    </Card>
  );
}
