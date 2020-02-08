import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Landingpage = () => {
  return (
    <div>
      <Jumbotron class="index">
        <h1>SHIPT</h1>
      </Jumbotron>
      <h2>SHIPPING SHOPPING MADE EASY!</h2>
      <div class="butts">
        <Button id="landing" href="http://localhost:3000/Signin">
          Sign In
        </Button>
        <Button id="landing" href="http://localhost:3000/Signup">
          Sign Up
        </Button>
        <br></br>
        <Button id="demo" href="http://localhost:3000/Signup">
          Demo
        </Button>
      </div>
      <Footer />
    </div>
  );
};
export default Landingpage;
