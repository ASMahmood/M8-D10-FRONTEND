import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [register, setRegister] = useState<boolean>(false);
  return (
    <Container id="global-Body" className="mb-4 loginPage">
      <Row>
        <Col xs={{ span: "6", offset: "2" }}>
          <h2>Welcome to Weather App</h2>
          <h6 className="text-muted">Yes. The offset is intentional</h6>
        </Col>
        <Col className="mt-3" xs={{ span: "6", offset: "3" }}>
          <div className="d-flex mb-3 justify-content-between align-items-center">
            <h4 className="m-0">Sign In</h4>{" "}
            <a href={process.env.REACT_APP_BE_URL + `/users/3rdParty/google`}>
              <Button className="signup-btn google">
                <FcGoogle />
              </Button>
            </a>
          </div>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="emailInput">Email:</Form.Label>
              <Form.Control id="emailInput" />
            </Form.Group>
            <Form.Row>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label htmlFor="passwordInput">Password:</Form.Label>
                  <Form.Control id="passwordInput" />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label htmlFor="password2Input">
                    Confirm Password:
                  </Form.Label>
                  <Form.Control id="password2Input" />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group>
              <Form.Label htmlFor="nameInput">Name:</Form.Label>
              <Form.Control id="nameInput" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
