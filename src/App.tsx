import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";

import "./style/App.css";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={HomePage} />
    </>
  );
}

export default App;
