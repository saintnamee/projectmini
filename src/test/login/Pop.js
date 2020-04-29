import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './test/login/Home';
import Login from './test/login/Login';
import SignUp from './test/login/SingUp'
import {AuthProvider} from './test/login/Auth'
import PrivateRoute from './test/login/Routes'


const Apps = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default Apps;
