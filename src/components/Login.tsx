import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();
  const [name, setName] = useState<string>();
  return (
    <Container id="global-Body" className="mb-4">
      <Row>
        <Col xs={12}>
          <Form></Form>
        </Col>
        <Col xs={12}>
          <a href={process.env.REACT_APP_BE_URL + `/users/3rdParty/google`}>
            <Button className="signup-btn google my-2 w-100">
              CONTINUE WITH GOOGLE
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
