import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom"
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from "./pages/Home"
import Login from './pages/Login'
import Signup from './pages/Signup'
import SelectWorkout from './components/SelectWorkout/SelectWorkout'
import CreateWorkout from './components/CreateWorkout/CreateWorkout'
import CreateExercise from './components/CreateExercise/CreateExercise'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#101820', //background
    },
    primary: {
      main: '#20B460', //medGreen
    },
    secondary: {
      main: '#2074b4', //blue
    },
    error: {
      main: '#701f16', //darkRed
    },
    delete: {
      main: 'b42f20',
    },
  }
});

export default class App extends Component {

  state = {
    workouts: [],
    currentWorkoutExercises: [],
    exercises: [],
    workoutExercise: [],
    id: null,
    workoutName: null,
    exerciseName: null,
    muscle: null,
    repsTime: null,
    weight: null,
    updated: false,
  }

  displayErrorExerciseName = () => {
    return (this.state.exerciseName === "" ? true : false)
  }
  
  displayErrorRepsTime = () => {
    return (this.state.repsTime === "" ? true : false)
  }
  
  displayErrorMuscle = () => {
    return (this.state.muscle === "" ? true : false)
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  exerciseObj = (e) => {
    this.setState({
      exerciseName: e.target.value
    })
  }

  createWorkouts = () => {
    axios.post(`http://localhost:8080/createWorkout`, {
      workoutName: this.state.workoutName,

    }).then(() => {
      axios.get('http://localhost:8080/createWorkout').then((response) => {
        this.setState({
          workouts: response.data,
          updated: true,
        });
      });
    });
  };

  workoutExerciseDisplay = () => {
    const targetWorkout = this.state.workouts.slice(-1)[0].id;
    const targetExercise = this.state.exercises.find(exObj => exObj.exerciseName === this.state.exerciseName).id;

    axios.put('http://localhost:8080/createWorkoutExercise', {
      workoutId: targetWorkout,
      exerciseId: targetExercise,
    }).then(() => {
      axios.get('http://localhost:8080/createWorkoutExercise', {
      }).then((response) => {
        this.setState({
          workoutExercise: response.data
        })

        this.changeWorkout(targetWorkout)
      })
    })
  }

  changeWorkout = (workoutId) => {
    const resultIds = this.state.workoutExercise.map(workoutExercise => workoutExercise.workoutId === workoutId ? workoutExercise.exerciseId : false);
    const results = this.state.exercises.filter(exercise => resultIds.includes(exercise.id));

    this.setState({
      currentWorkoutExercises: results
    });
  }

  createExercise = () => {
    axios.post(`http://localhost:8080/createExercise`, {
      exerciseName: this.state.exerciseName,
      muscle: this.state.muscle,
      repsTime: this.state.repsTime,
      weight: this.state.weight
    }).then((response) => {
      axios.get('http://localhost:8080/createExercise').then((response) => {
        this.setState({
          exercises: response.data,
          updated: true,
        });
      });
    });
  };

  updateExercise = (e, id) => {
    const newExerciseList = this.state.exercises.map((item) => {
      if (item.id === id) {
        let updatedItem = {
          ...item
        }
        updatedItem[e.target.name] = e.target.value
        return updatedItem;
      };
      return item;
    })
    this.setState({ exercises: newExerciseList })
    let ui = this.state.exercises.find((ex) => ex.id === id)

    axios.put(`http://localhost:8080/updateExercise/${ui.id}`, {
      exerciseName: ui.exerciseName,
      muscle: ui.muscle,
      repsTime: ui.repsTime,
      weight: ui.weight
    })
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
    }).then(() => {
      axios.get('http://localhost:8080/createWorkoutExercise').then((response) => {

        this.setState({
          workoutExercise: response.data
        });
      });
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.updated !== this.state.updated) {

      let ex = axios.get('http://localhost:8080/createExercise')
      let wo = axios.get('http://localhost:8080/createWorkout')
      let we = axios.get('http://localhost:8080/createWorkoutExercise')
      axios.all([ex, wo, we])
        .then(
          axios.spread((...responses) => {
            this.setState({
              exercises: responses[0].data,
              workouts: responses[1].data,
              workoutExercise: responses[2].data,
              updated: false,
            });
          })
        )
    }
  }

  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <Router className="App">
            <ThemeProvider theme={theme}>
              <CssBaseline />

              <Switch>
                <Route path='/' exact
                  render={() => <Login />}
                />
                <Route path='/signup'
                  render={() => <Signup />}
                />
                <Route path='/home' component={Home} />
                <Route path='/selectWorkout'
                  render={() => <SelectWorkout
                    workouts={this.state.workouts}
                    exercises={this.state.exercises}
                    currentWorkoutExercises={this.state.currentWorkoutExercises}
                    updateExercise={this.updateExercise}
                    changeWorkout={this.changeWorkout}
                  />}
                />

                <Route path='/createExercise'
                  render={() => <CreateExercise
                    workouts={this.state.workouts}
                    exercises={this.state.exercises}
                    addExercise={this.addExercise}
                    updateExercise={this.updateExercise}
                    createExercise={this.createExercise}
                    handleChange={this.handleChange}
                    displayErrorExerciseName={this.displayErrorExerciseName}
                    displayErrorMuscle={this.displayErrorMuscle}
                    displayErrorRepsTime={this.displayErrorRepsTime}
                  />}
                />
                <Route path='/createWorkout'
                  render={() => <CreateWorkout
                    workouts={this.state.workouts}
                    currentWorkoutExercises={this.state.currentWorkoutExercises}
                    exercises={this.state.exercises}
                    handleChange={this.handleChange}
                    exerciseObj={this.exerciseObj}
                    createWorkouts={this.createWorkouts}
                    updateExercise={this.updateExercise}
                    changeWorkout={this.changeWorkout}
                    workoutExerciseDisplay={this.workoutExerciseDisplay}
                  />}
                />
              </Switch>

            </ThemeProvider>
          </Router>
        </BrowserRouter>
      </div>
    )
  };
};

