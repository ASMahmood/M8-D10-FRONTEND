import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function FabCard() {
  return (
    <Card className="m-2 p-2" style={{ border: "none" }}>
      <Card.Body className="d-flex dailyInfo align-items-start justify-content-between"></Card.Body>
    </Card>
  );
}
