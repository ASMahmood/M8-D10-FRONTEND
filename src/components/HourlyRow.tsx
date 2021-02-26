import React from "react";
import { apiStructure } from "../types/interfaces";
import { Carousel, Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import HourlyCard from "./HourlyCard";
import CarouselHourBlock from "./CarouselHourBlock";

export default function HourlyRow(props: apiStructure) {
  let blocks = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <div id="hourRow">
      <h4 className="ml-2">Next 24 hours:</h4>
      {props.hourly !== undefined && props.timezone_offset !== undefined && (
        <Row>
          {console.log(props.timezone_offset)}
          {props.hourly.slice(0, 24).map((hour, index) => (
            <Col xs={4} className="mt-3">
              <HourlyCard
                key={index}
                {...hour}
                timezone_offset={
                  props.timezone_offset !== undefined
                    ? props.timezone_offset + 1
                    : 0
                }
              />
            </Col>
          ))}
        </Row>
      )}
      {/* {props.hourly !== undefined && (
        <Carousel>
          {blocks.map(
            (i) =>
              props.hourly !== undefined && (
                <Carousel.Item key={i}>
                  <CarouselHourBlock hourly={props.hourly.slice(i * 3, 3)} />{" "}
                </Carousel.Item>
              )
          )}
        </Carousel>
      )} */}

      {/* {props.hourly !== undefined && (
        <OwlCarousel margin={10} className="owl-theme">
          {props.hourly.slice(0, 24).map((hour, index) => (
            <HourlyCard key={index} {...hour} />
          ))}
        </OwlCarousel>
      )} */}
    </div>
  );
}
