import React from "react";
import nav from "react-bootstrap/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <nav class="navbar fixed-bottom navbar-light bg-warning">
        <a class="navbar-text">
          <p>&copy; Shipt 2020-present</p>
          <p>Created by Martin Stovall</p>
        </a>
      </nav>
    );
  }
}
export default Footer;
