import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Pages
import Landingpage from "./Pages";
// import Notfoundpage from "./Pages/404";
import Signinpage from "./Pages/Signin";
import Signuppage from "./Pages/Signup";
import Mainpage from "./Pages/Main";
import Newpage from "./Pages/Newship";
import Comppage from "./Pages/Comparison";
import Choicepage from "./Pages/Choice";
import Bookpage from "./Pages/Addressbook";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/Signin" component={Signinpage} />
          <Route exact path="/Signup" component={Signuppage} />
          <Route exact path="/Main" component={Mainpage} />
          <Route exact path="/Newship" component={Newpage} />
          <Route exact path="/Comparison" component={Comppage} />
          <Route exact path="/Choice" component={Choicepage} />
          <Route exact path="/Addressbook" component={Bookpage} />
          {/* <Route exact path="/404" component={Notfoundpage} />
          <Redirect to="/404"/> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
