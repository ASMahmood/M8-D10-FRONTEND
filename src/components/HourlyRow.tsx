import React from "react";
import { apiStructure } from "../types/interfaces";
import { Carousel, Row, Col, Card } from "react-bootstrap";
import HourlyCard from "./HourlyCard";
import HourlyTabs from "./HourlyTabs";

export default function HourlyRow(props: apiStructure) {
  return (
    <div id="hourRow">
      <h4 className="hourTitle d-flex align-items-center">Next 24 hours:</h4>
      {props.hourly !== undefined && props.timezone_offset !== undefined && (
        <Row id="actualHourRow">
          <Col xs={6} className="h-100">
            <Card className="hourSelector h-100">
              {props.hourly.slice(0, 24).map((hour, index) => (
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
          <Col xs={6} className="h-100">
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
