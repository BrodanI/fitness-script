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
    workouts: [],
    exercises: [],
    exerciseName: null,
    muscle: null,
    respTime: null,
    weight: null,
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })

    console.log({
      [e.target.name]: e.target.value
    })
    console.log(this.state.exercises);
  };

  addExercise = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/createExercise', {
      exerciseName: this.state.exerciseName,
      muscle: this.state.muscle,
      repsTime: this.state.repsTime,
      weight: this.state.weight
    }).then((response) => {
      this.setState({
        exercises: response.data
      });
    });
  };

  componentDidMount() {
    axios.get('http://localhost:8080/createExercise').then((response) => {

      this.setState({
        exercises: response.data,
      });
    }).then(() => {
      axios.get('http://localhost:8080/createWorkout').then((response) => {

        this.setState({
          workouts: response.data
        });
      });
    });
  };


  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps, prevState);
  //   if (prevState.workouts !== this.state.workouts) {

  //     let ex = axios.get('http://localhost:8080/createExercise')
  //     let wo = axios.get('http://localhost:8080/createWorkout')
  //     axios
  //       .all([ex, wo])
  //       .then(
  //         axios.spread((...responses) => {
  //           this.setState({
  //             exercises: responses.data,
  //             workouts: responses.data,
  //           });
  //         })
  //       )
  //   }
  // }

  render() {
    return (
      <div className="App" >
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
                  render={() => <Login />}
                />
                <Route path='/login/signup'
                  render={() => <Signup />}
                />

                <Route path='/createExercise'
                  render={() => <CreateExercise
                    workouts={this.state.workouts}
                    exercises={this.state.exercises}
                    addExercise={this.addExercise}
                    onChange={this.onChange}
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

