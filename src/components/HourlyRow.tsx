import React from "react";
import { apiStructure, reduxStore } from "../types/interfaces";
import { useSelector } from "react-redux";
import { Carousel, Row, Col, Card } from "react-bootstrap";
import HourlyCard from "./HourlyCard";
import HourlyTabs from "./HourlyTabs";

export default function HourlyRow() {
  const currentHour = useSelector(
    (state: reduxStore) => state.util.currentHour
  );
  const hourArray = useSelector((state: reduxStore) => state.forecast.hourly);
  return (
    <div id="hourRow">
      <h4 className="hourTitle d-flex align-items-center">Next 24 hours:</h4>
      {hourArray.length > 0 && (
        <Row id="actualHourRow">
          <Col xs={6} className="h-100">
            <Card className="hourSelector h-100">
              {hourArray.slice(0, 24).map((hour, index) => (
                <HourlyTabs index={index} {...hour} />
              ))}
            </Card>
          </Col>
          <Col xs={6} className="h-100">
            {hourArray
              .slice(currentHour, currentHour + 1)
              .map((hour, index) => (
                <HourlyCard index={index} {...hour} />
              ))}
          </Col>
        </Row>
      )}
    </div>
  );
}
