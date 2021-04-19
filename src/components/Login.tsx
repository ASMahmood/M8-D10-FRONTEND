import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { RouteComponentProps } from "react-router-dom";

function Login(props: RouteComponentProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [register, setRegister] = useState<boolean>(false);
  const [validated, setValidated] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation(); //STOPS CODE HERE
    } else {
      loginUser();
      //LOGIN FUNC
    }
    setValidated(true);
  };

  const loginUser = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/login`,
        {
          method: "POST",
          body: JSON.stringify({ email: email, password: password }),
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let parsedResp = await response.json();
      console.log(parsedResp);
      if (parsedResp.message === "No User Found") {
        toast.error("Incorrect Credentials", {
          style: {
            border: "1px solid #000",
            padding: "16px",
            color: "#000",
          },
          iconTheme: {
            primary: "#000",
            secondary: "#FFFAEE",
          },
        });
        setValidated(false);
      } else {
        await localStorage.setItem("access_token", parsedResp.token);
        props.history.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container id="global-Body" className="mb-4 loginPage">
      <div>
        <Toaster />
      </div>
      <Row>
        <Col xs={{ span: "6", offset: "2" }}>
          <h2>Welcome to Weather App</h2>
          <h6 className="text-muted">Yes. The offset is intentional</h6>
        </Col>
        <Col className="mt-3" xs={{ span: "6", offset: "3" }}>
          <div className="d-flex mb-3 justify-content-between align-items-center">
            <h4 className="m-0">Sign {register ? "Up" : "In"}</h4>
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip id="registerToolTip">Login with Google</Tooltip>
              }
            >
              <a href={process.env.REACT_APP_BE_URL + `/users/3rdParty/google`}>
                <Button className="signup-btn google">
                  <FcGoogle />
                </Button>
              </a>
            </OverlayTrigger>
          </div>
          {register ? (
            <Form
              noValidate
              autoComplete="off"
              validated={validated}
              onSubmit={(e) => handleSubmit(e)}
              className="d-flex flex-column justify-content-end"
            >
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
              <Button className="signup-btn ml-auto" type="submit">
                <AiOutlineLogin color="black" />
              </Button>
            </Form>
          ) : (
            <Form
              noValidate
              autoComplete="off"
              validated={validated}
              onSubmit={(e) => handleSubmit(e)}
              className="d-flex flex-column justify-content-end"
            >
              <Form.Group>
                <Form.Label htmlFor="emailInput">Email:</Form.Label>
                <Form.Control
                  required
                  id="emailInput"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="passwordInput">Password:</Form.Label>
                <Form.Control
                  required
                  id="passwordInput"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </Form.Group>
              <div className="d-flex">
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={<Tooltip id="registerToolTip">Register</Tooltip>}
                >
                  <Button
                    className="signup-btn ml-auto"
                    onClick={(e) => {
                      e.preventDefault();
                      setRegister(true);
                    }}
                  >
                    <AiOutlineUserAdd color="black" />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={<Tooltip id="registerToolTip">Login</Tooltip>}
                >
                  <Button className="signup-btn ml-2" type="submit">
                    <AiOutlineLogin color="black" />
                  </Button>
                </OverlayTrigger>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
