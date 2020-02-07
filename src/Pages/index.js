import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Landingpage = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome to shipt!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <Button href="http://localhost:3000/Signin">Sign In</Button>
        <Button href="http://localhost:3000/Signup">Sign Up</Button>
      </Jumbotron>
    </div>
  );
};
export default Landingpage;
