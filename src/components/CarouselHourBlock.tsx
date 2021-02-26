import React from "react";
import { Carousel } from "react-bootstrap";
import { apiStructure, hourlyStructure } from "../types/interfaces";
import HourlyCard from "./HourlyCard";

interface Props {
  hourly: {
    clouds: number;
    dt: number;
    humidity: number;
    temp: number;
    wind_deg: number;
    wind_speed: number;
    uvi: number;
    pop: number;
    timezone_offset: number;
    weather: {
      icon: string;
      main: string;
    }[];
  }[];
}

export default function CarouselHourBlock(props: Props) {
  return (
    <>
      {props.hourly.map((hour) => {
        <HourlyCard {...hour} />;
      })}
    </>
  );
}
