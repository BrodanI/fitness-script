import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom"
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from "./pages/Home"
import Login from './pages/Login'
import Signup from './pages/Signup'
import SelectWorkout from './components/SelectWorkout/SelectWorkout'
import CreateWorkout from './components/CreateWorkout/CreateWorkout'
import CreateExercise from './components/CreateExercise/CreateExercise'

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
      main: '#20B460', //bottomLogo
    },
    secondary: {
      main: '#2074b4', //blue
    },
    error: {
      main: '#b42f20', //red
    },
    delete: {
      main: 'b42f20',
    },
    // warning: {
    //   main: '#0044ff',
    // },
    info: {
      main: '#b42f20',
    },
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
      exerciseName: "Hammer Curl",
      muscle: "Bicep",
      repsTime: "20",
      weight: "30lbs"
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

              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/selectWorkout'
                  render={() => <SelectWorkout
                    workouts={this.state.workouts}
                    exercises={this.state.exercises}
                  />}
                />

                <Route path='/login' exact
                  render={() => <Login/>}
                />
                <Route path='/login/signup'
                  render={() => <Signup/>}
                />

                <Route path='/createExercise'
                  render={() => <CreateExercise
                    workouts={this.state.workouts}
                    exercises={this.state.exercises}
                  />}
                />
                <Route path='/createWorkout'
                  render={() => <CreateWorkout
                    workouts={this.state.workouts}
                    exercises={this.state.exercises}
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

