import React from "react";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import { apiStructure, favsColProps, locCoords } from "../types/interfaces";
import { AiOutlineStar } from "react-icons/ai";
import {
  convertUnixToReadble,
  kelvinToCelsius,
  convertUnixToDate,
} from "../functions";

type hompageProps = apiStructure & locCoords & { name?: String };

export default function TodayWeather(props: hompageProps) {
  return (
    <Jumbotron id="todayJumbo" className="mb-0">
      {props.current !== undefined && props.timezone_offset !== undefined && (
        <>
          <Container fluid>
            <Row>
              <Col
                xs={12}
                className="d-flex align-items-center justify-content-between position-relative"
              >
                <span id="userNameSpan" className="align-items-center d-flex">
                  Hello, {props.name}
                </span>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    alt="weather"
                    src={`http://openweathermap.org/img/wn/${props.current.weather[0].icon}@2x.png`}
                  />
                  <span>
                    {props.current.weather[0].description.toUpperCase()}
                  </span>
                </div>
                <h1 className="align-items-center d-flex">
                  {kelvinToCelsius(props.current.temp)}°C - {props.timezone}{" "}
                  <AiOutlineStar onClick={() => {}} /> -{" "}
                  {convertUnixToReadble(
                    props.current.dt + props.timezone_offset
                  )}{" "}
                </h1>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col
                xs={3}
                className="clouds d-flex flex-column align-items-center"
              >
                <span>CLOUD COVERAGE</span>
                <h2>{props.current.clouds}%</h2>
              </Col>
              <Col
                xs={2}
                className="humidity d-flex flex-column align-items-center"
              >
                <span>HUMIDITY</span>
                <h2>{props.current.humidity}%</h2>
              </Col>
              <Col
                xs={2}
                className="sunrise d-flex flex-column align-items-center"
              >
                <span>SUNRISE</span>
                <h2>
                  {convertUnixToReadble(
                    props.current.sunrise + props.timezone_offset
                  )}
                </h2>
              </Col>
              <Col
                xs={2}
                className="sunset d-flex flex-column align-items-center"
              >
                <span>SUNSET</span>
                <h2>
                  {convertUnixToReadble(
                    props.current.sunset + props.timezone_offset
                  )}
                </h2>
              </Col>
              <Col
                xs={3}
                className="windInfo d-flex flex-column align-items-center"
              >
                <span>WIND SPEED</span>
                <h5 className="mb-0">{props.current.wind_deg}°</h5>
                <h5>{props.current.wind_speed}m/s</h5>
              </Col>
            </Row>
          </Container>
        </>
      )}
      {console.log(props)}
    </Jumbotron>
  );
}
