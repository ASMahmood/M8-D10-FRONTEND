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

function HomePage(props: RouteComponentProps) {
  const dispatch = useDispatch();
  const name = useSelector((state: reduxStore) => state.user.name);
  const [apiInfo, setApiInfo] = useState<apiStructure>();
  const [locationCoords, setLocationCoords] = useState<locCoords>({
    lat: 51.5085,
    lon: -0.1257,
  });
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
    fetchUser();
  }, [query]);

  useEffect(() => {
    fetchApi();
  }, [locationCoords]);

  const getInput = (query: string) => {
    setQuery(query);
  };
  const addFav = (newFav: favsColProps) => {
    console.log("hey");
  };

  const fetchLangLong = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/weather/city?city=${query}`,
        {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      let parsedResp = await response.json();
      console.log(parsedResp);
      setLocationCoords(parsedResp.coord);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchApi = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/weather/geolocation?lat=${locationCoords.lat}&lon=${locationCoords.lon}`,
        {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      let parsedResp = await response.json();
      dispatch({ type: "POPULATE_FORECAST", payload: parsedResp });
      setApiInfo(parsedResp);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/homepage/userinfo/help/me`,
        {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      let parsedResp = await response.json();
      dispatch({ type: "POPULATE_USER", payload: parsedResp });
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavourites = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/favourites/add`,
        {
          method: "PUT",
          body: JSON.stringify("favs"),
          credentials: "include",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-type": "application/json",
          },
        }
      );
      let parsedResp = await response.json();
      console.log(parsedResp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid id="global-Body">
      <Row>
        <Col xs={12} lg={8} className="h-100">
          <TodayWeather {...apiInfo} name={name} />
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
