import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom"
import axios from "axios";
import Header from './components/Header/Header'
import Home from "./pages/Home"
import Login from "./pages/Login"
import { StylesProvider } from "@material-ui/core/styles";



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Router className="App">
            <StylesProvider injectFirst>
              <Header />
              <Switch>

                <Route path='/' exact component={Home} />
                {/* <Route path='/login' component={Login} /> */}

              </Switch>
            </StylesProvider>
          </Router>
        </BrowserRouter>
      </div>
    )
  };
};
