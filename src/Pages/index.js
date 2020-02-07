import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Footer from "../components/Footer"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Landingpage = () => {
  return (
    <div>
      <Jumbotron>
        <h1>SHIPT</h1>
      </Jumbotron>
        <h2>
          Shipping shopping made easy
        </h2>
      <Button id="landing btn-warning" href="http://localhost:3000/Signin">Sign In</Button>
      <Button id="landing" href="http://localhost:3000/Signup">Sign Up</Button>
    <Footer />
    </div>
  );
};
export default Landingpage;
