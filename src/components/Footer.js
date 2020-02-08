import React from "react";
import nav from "react-bootstrap/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <nav class="navbar fixed-bottom navbar-light bg-warning">
        <ul class="nav navbar-nav navbar-center">
            <li>Shipt &copy;</li>
            <li>Created by Martin Stovall</li>
            
        </ul>
      </nav>
    );
  }
}
export default Footer;
