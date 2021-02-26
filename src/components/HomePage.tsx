import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { locCoords, apiStructure } from "../types/interfaces";
import SearchBar from "./SearchBar";
import TodayWeather from "./TodayWeather";
import DailyCol from "./DailyCol";
import HourlyRow from "./HourlyRow";
import Favourite from "./Favourite";
import "../style/App.css";
import { withRouter } from "react-router-dom";

function HomePage(props: any) {
  const [apiInfo, setApiInfo] = useState<apiStructure>();
  const [locationCoords, setLocationCoords] = useState<locCoords>({
    lat: 51.5085,
    lon: -0.1257,
  });
  const [query, setQuery] = useState<string>("London");
  const [name, setName] = useState<string>();
  const [favs, setFavs] = useState<Array<Object>>([]);

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

  const fetchLangLong = async () => {
    try {
      let response = await fetch(
        `https://shit-weather-app.herokuapp.com/weather/city?city=${query}`,
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
        `https://shit-weather-app.herokuapp.com/weather/geolocation?lat=${locationCoords.lat}&lon=${locationCoords.lon}`,
        {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      let parsedResp = await response.json();

      setApiInfo(parsedResp);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async () => {
    try {
      let response = await fetch(
        `https://shit-weather-app.herokuapp.com/users/homepage/userinfo/help/me`,
        {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      let parsedResp = await response.json();
      setName(parsedResp.name);
      if (parsedResp.favourites) {
        setFavs(parsedResp.favourites);
      }
      console.log(parsedResp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid id="global-Body" className="mb-4">
      <Row>
        <Col xs={12} lg={8}>
          <TodayWeather {...apiInfo} name={name} />
          <HourlyRow {...apiInfo} />
        </Col>
        <Col xs={12} lg={4} id="side-Col">
          <SearchBar search={getInput} />
          <Favourite />
          <DailyCol {...apiInfo} />
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(HomePage);
