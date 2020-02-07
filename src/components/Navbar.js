import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="warning" expand="lg" variant="light">
          <Navbar.Brand href="http://localhost:3000/Main">
            <img
              src="https://github.com/RebelCommand78/shipt/blob/master/public/Shipt.png?raw=true"
              width="50px"
              height="50px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="Newship">New Shipment</Nav.Link>
              <Nav.Link href="addressbook">Address Book</Nav.Link>
              <NavDropdown title="Provider Links" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://www.dhl.com/en.html/"
                  target="_blank"
                >
                  DHL
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="https://www.fedex.com/en-us/home.html"
                  target="_blank"
                >
                  FedEx
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="https://www.ups.com/us/en/Home.page"
                  target="_blank"
                >
                  UPS
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://www.usps.com/" target="_blank">
                  USPS
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Tracking"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
