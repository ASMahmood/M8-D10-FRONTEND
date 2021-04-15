import React from "react";
import { apiStructure } from "../types/interfaces";
import { Carousel, Row, Col, Card } from "react-bootstrap";
import HourlyCard from "./HourlyCard";
import HourlyTabs from "./HourlyTabs";

export default function HourlyRow(props: apiStructure) {
  return (
    <div id="hourRow">
      <h4 className="ml-2">Next 24 hours:</h4>
      {props.hourly !== undefined && props.timezone_offset !== undefined && (
        <Row>
          <Col xs={4} className="mt-3 h-100">
            <Card className="hourCard h-100">
              {props.hourly.slice(0, 8).map((hour, index) => (
                <HourlyTabs
                  key={index}
                  {...hour}
                  timezone_offset={
                    props.timezone_offset !== undefined
                      ? props.timezone_offset + 1
                      : 0
                  }
                />
              ))}
            </Card>
          </Col>
          <Col xs={4} className="mt-3">
            {props.hourly.slice(0, 1).map((hour, index) => (
              <HourlyCard
                key={index}
                {...hour}
                timezone_offset={
                  props.timezone_offset !== undefined
                    ? props.timezone_offset + 1
                    : 0
                }
              />
            ))}
          </Col>
        </Row>
      )}
    </div>
  );
}
