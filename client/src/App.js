import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom"
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from "./pages/Home"
import Header from './components/Header/Header'
import SelectWorkout from './components/SelectWorkout/SelectWorkout'
import Login from "./pages/Login"
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  //   primary - used to represent primary interface elements for a user. It's the color displayed most frequently across your app's screens and components.
  // secondary - used to represent secondary interface elements for a user. It provides more ways to accent and distinguish your product. Having it is optional.
  // error - used to represent interface elements that the user should be made aware of.
  // warning - used to represent potentially dangerous actions or important messages.
  // info - used to present information to the user that is neutral and not necessarily important.
  // success - used to indicate the successful completion of an action that user triggered.
  palette: {
    background: {
      default: '#101820',
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#20B460', //bottomLogo
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#2074b4',
    },
    error: {
      main: '#b42f20', //red
    },
    // warning: {
    //   main: '#0044ff',
    // },
    // info: {
    //   main: '#0044ff',
    // },
    // success: {
    //   main: '#0044ff', 
    // },

  }
});




export default class App extends Component {

  state = {
    workouts: null,
    exercises: [
      {
      exerciseName: 1,
      muscle: 2,
      repsTime: 3,
      weight: 4
    }
    ]
  }

  // componentDidMount() {
  //     this.setState({
  //       workoutName: null,
  //     })
  // }


  // componentDidUpdate(prevProps) {
  //   this.setState({
  //     workoutName: null,
  //   })
  // }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Router className="App">
            <ThemeProvider theme={theme}>
              <CssBaseline />

              <Header />

              <Switch>

                <Route path='/' exact component={Home} />
                <Route path='/workout'
                  render={() => <SelectWorkout
                    workouts={this.state.workouts}
                    exercises={this.state.exercises}
                  // muscle={this.state.muscle}
                  // repsTime={this.state.repsTime}
                  // weight={this.state.weight}
                  />}
                />
                {/* <Route path='/login' component={Login} /> */}

              </Switch>

            </ThemeProvider>
          </Router>
        </BrowserRouter>
      </div>
    )
  };
};

