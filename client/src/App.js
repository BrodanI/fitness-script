import React from "react";
import { Component } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom"



class App extends Component() {
  return() {
    render(
      <div className="App">
        <BrowserRouter>
          <Router className="App">
            <Header />
            <Switch>

              <Route path='/home' exact component={Home} />
              <Route path='/login' component={Login} />

            </Switch>
          </Router>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
