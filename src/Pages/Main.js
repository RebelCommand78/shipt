import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";

const Mainpage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="../public/001-laptop.svg" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="../public/002-door.svg" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="../public/003-connection.svg" rounded />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default Mainpage;
