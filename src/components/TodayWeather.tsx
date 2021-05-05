import React from "react";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import {
  apiStructure,
  favsColProps,
  locCoords,
  reduxStore,
} from "../types/interfaces";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { connect } from "react-redux";
import {
  convertUnixToReadble,
  kelvinToCelsius,
  convertUnixToDate,
} from "../functions";
import { fetchUser } from "../functions/api";

const mapStateToProps = (state: reduxStore) => state;

function TodayWeather(props: reduxStore) {
  const addToFav = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/favourites/add`,
        {
          method: "PUT",
          body: JSON.stringify({
            location: props.util.city + "," + props.util.country,
            lat: props.forecast.lat,
            lon: props.forecast.lon,
          }),
          credentials: "include",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Jumbotron id="todayJumbo" className="mb-0">
      {props.forecast.current !== undefined &&
        props.forecast.timezone_offset !== undefined && (
          <>
            <Container fluid>
              <Row>
                <Col
                  xs={12}
                  className="d-flex align-items-center justify-content-between position-relative"
                >
                  <span id="userNameSpan" className="align-items-center d-flex">
                    Hello, {props.user.name}
                  </span>
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <img
                      alt="weather"
                      src={`http://openweathermap.org/img/wn/${props.forecast.current.weather[0].icon}@2x.png`}
                    />
                    <span>
                      {props.forecast.current.weather[0].description.toUpperCase()}
                    </span>
                  </div>
                  <h1 className="align-items-center d-flex">
                    {kelvinToCelsius(props.forecast.current.temp)}°C -{" "}
                    {props.util.city + "," + props.util.country}{" "}
                    <AiOutlineStar onClick={() => {}} /> -{" "}
                    {convertUnixToReadble(
                      props.forecast.current.dt + props.forecast.timezone_offset
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
                  <h2>{props.forecast.current.clouds}%</h2>
                </Col>
                <Col
                  xs={2}
                  className="humidity d-flex flex-column align-items-center"
                >
                  <span>HUMIDITY</span>
                  <h2>{props.forecast.current.humidity}%</h2>
                </Col>
                <Col
                  xs={2}
                  className="sunrise d-flex flex-column align-items-center"
                >
                  <span>SUNRISE</span>
                  <h2>
                    {convertUnixToReadble(
                      props.forecast.current.sunrise +
                        props.forecast.timezone_offset
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
                      props.forecast.current.sunset +
                        props.forecast.timezone_offset
                    )}
                  </h2>
                </Col>
                <Col
                  xs={3}
                  className="windInfo d-flex flex-column align-items-center"
                >
                  <span>WIND SPEED</span>
                  <h5 className="mb-0">{props.forecast.current.wind_deg}°</h5>
                  <h5>{props.forecast.current.wind_speed}m/s</h5>
                </Col>
              </Row>
            </Container>
          </>
        )}
      {console.log(props)}
    </Jumbotron>
  );
}

export default connect(mapStateToProps)(TodayWeather);
