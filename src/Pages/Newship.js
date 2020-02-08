import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Navbar";
import Footer from "../components/Footer";

import "./Newship.css";

const Newpage = () => {
  return (
    <div>
      <Header />
      {/* Enter where the package is being shipped from */}
      <Form className="From">
        <Form.Group controlId="formGridAddress1">
          <Form.Label>From Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>From Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>From City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>From State</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>From Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Save this Address" />
        </Form.Group>
        {/* this button will take you to where you are shipping the package to */}
        <Button variant="primary" type="submit">
          Ship To Address
        </Button>
      </Form>

      <Form className="To">
        <Form.Group controlId="formGridAddress1">
          <Form.Label>To Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>To Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>To City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>To State</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>From Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Save this Address" />
        </Form.Group>

        {/* This button will take you to the form to enter the dimensions for the package  */}

        <Button variant="primary" type="submit">
          Dimensions
        </Button>
      </Form>

      <Form className="Dimensions">
        <Form.Group controlId="Length">
          <Form.Label>Length</Form.Label>
          <Form.Control  />
        </Form.Group>

        <Form.Group as={Col} controlId="Width">
          <Form.Label>Width</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="Height">
            <Form.Label>Height</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="Weight">
            <Form.Label>Weight</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        

        {/* This button will take you to the form to enter the dimensions for the package  */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Footer />
    </div>
  );
};
export default Newpage;
