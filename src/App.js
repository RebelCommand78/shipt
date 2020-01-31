import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import Mainpage from "./Pages";
import Notfoundpage from "./Pages/404";
import Signinpage from "./Pages/Signin/Signin";
import Signuppage from "./Pages/Signup/Signup";
import Newpage from "./Pages/Newship/Newship";
import Comppage from "./Pages/Comparison/Comparison";
import Choicepage from "./Pages/Choice/Choice";
import Bookpage from "./Pages/Addressbook/Addressbook";

class App extends Component {
  render() {
    return (
      <Router>
        <switch>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/Signin" component={Signinpage} />
          <Route exact path="/Signup" component={Signuppage} />
          <Route exact path="/Newship" component={Newpage} />
          <Route exact path="/Comparison" component={Comppage} />
          <Route exact path="/Choice" component={Choicepage} />
          <Route exact path="/addressbook" component={Bookpage} />
          {/* <Route exact path="/404" component={Notfoundpage} />
          <Redirect to="/404"/> */}
        </switch>
      </Router>
    );
  }
}

export default App;
