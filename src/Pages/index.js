import React from "react";
import "./index.css";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

const Mainpage = () => {
  return (
    <div>
      
      <Jumbotron>
      <h1>Welcome to shipt!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Sign In</Button>
          <Button variant="primary">Sign Up</Button>
        </p>
      </Jumbotron>
    </div>
  );
};
export default Mainpage;
