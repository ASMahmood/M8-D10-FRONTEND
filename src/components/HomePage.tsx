import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  locCoords,
  apiStructure,
  favsColProps,
  reduxStore,
} from "../types/interfaces";
import SearchBar from "./SearchBar";
import TodayWeather from "./TodayWeather";
import DailyCol from "./DailyCol";
import HourlyRow from "./HourlyRow";
import Favourite from "./Favourite";
import "../style/App.css";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, fetchCoordinates, fetchForecast } from "../functions/api";

function HomePage(props: RouteComponentProps) {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>("London");

  useEffect(() => {
    if (props.location.search !== "") {
      console.log(props.location.search.split("=")[1]);
      localStorage.setItem("access_token", props.location.search.split("=")[1]);
      props.history.push("/home");
    }
  }, []);

  useEffect(() => {
    fetchLangLong();
    populateUser();
  }, [query]);

  const getInput = (query: string) => {
    setQuery(query);
  };

  const fetchLangLong = async () => {
    try {
      let coordinates = await fetchCoordinates(query);
      dispatch({ type: "ADD_CITY", payload: coordinates.name });
      dispatch({ type: "ADD_COUNTRY", payload: coordinates.sys.country });
      fetchApi(coordinates.coord);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchApi = async (coords: locCoords) => {
    try {
      let forecast = await fetchForecast(coords.lat, coords.lon);
      dispatch({ type: "POPULATE_FORECAST", payload: forecast });
    } catch (error) {
      console.log(error);
    }
  };

  const populateUser = async () => {
    try {
      let userInfo = await fetchUser();
      dispatch({ type: "POPULATE_USER", payload: userInfo });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid id="global-Body">
      <Row>
        <Col xs={12} lg={8} className="h-100">
          <TodayWeather />
          <HourlyRow />
        </Col>
        <Col xs={12} lg={4} id="side-Col">
          <SearchBar search={getInput} />
          <Favourite />
          <DailyCol />
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(HomePage);
