import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { hourlyStructure, reduxStore } from "../types/interfaces";
import { useSelector, useDispatch } from "react-redux";
import {
  convertUnixToReadble,
  kelvinToCelsius,
  convertUnixToDate,
} from "../functions";

export default function HourlyTabs(props: hourlyStructure) {
  const timezoneOffset = useSelector(
    (state: reduxStore) => state.forecast.timezone_offset
  );
  const dispatch = useDispatch();
  return (
    <div
      className="dailyTop d-flex align-items-center hourTab"
      onClick={() => dispatch({ type: "SWITCH_CURRENT", payload: props.index })}
    >
      <Card.Img
        variant="top"
        className="img-flid hourImg"
        src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
      />

      <h5 className="ml-3">
        {convertUnixToReadble(props.dt + timezoneOffset)} -{" "}
        {convertUnixToDate(props.dt)}
      </h5>
      <h5 className="ml-4">{kelvinToCelsius(props.temp)}°C</h5>
      <h5 className="ml-3">{props.weather[0].main.toUpperCase()}</h5>
    </div>
  );
}
