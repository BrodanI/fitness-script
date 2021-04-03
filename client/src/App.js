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

  inputRef = React.createRef()

  state = {
    workouts: [],
    exercises: [],
    id: null,
    workoutName: null,
    exerciseName: null,
    muscle: null,
    respTime: null,
    weight: null,
    updated: false,
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  exerciseObj = (e) => {
    this.setState({
      exerciseName: e.target.value
    })
    console.log(e.target)
  }

  addExerciseToWorkout = () => {
    const targetWorkout = this.state.workouts.slice(-1)[0].id;
    console.log(targetWorkout);
    
    const targetExercise = this.state.exercises.find( exObj => exObj.exerciseName === this.state.exerciseName).id
    console.log(targetExercise)

    axios.put('http://localhost:8080/createWorkout', {
      workoutId: targetWorkout,
      exerciseId: targetExercise,
    });

    // const targetExercise = props.exercise
    //target workout ID
    //target exercise ID
    //on Add = update workoutExerciseData workoutID w/ exerciseId
  }


  createWorkouts = () => {
    console.log('post')
    axios.post(`http://localhost:8080/createWorkout`, {
      workoutName: this.state.workoutName,

    }).then(() => {
      axios.get('http://localhost:8080/createWorkout').then((response) => {
        this.setState({
          workouts: response.data,
          updated: true,
        });
        console.log('client get request');
        console.log(response.data);
      });
    });
  };

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
    console.log(newExerciseList);
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
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.updated !== this.state.updated) {

      let ex = axios.get('http://localhost:8080/createExercise')
      let wo = axios.get('http://localhost:8080/createWorkout')
      axios.all([ex, wo])
        .then(
          axios.spread((...responses) => {
            this.setState({
              exercises: responses[0].data,
              workouts: responses[1].data,
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
                <Route path='/' exact component={Home} />
                <Route path='/selectWorkout'
                  render={() => <SelectWorkout
                    workouts={this.state.workouts}
                    exercises={this.state.exercises}
                    updateExercise={this.updateExercise}
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
                    updateExercise={this.updateExercise}
                    createExercise={this.createExercise}
                    handleChange={this.handleChange}
                  />}
                />
                <Route path='/createWorkout'
                  render={() => <CreateWorkout
                    workouts={this.state.workouts}
                    exercises={this.state.exercises}
                    exerciseName={this.exerciseName}
                    handleChange={this.handleChange}
                    exerciseObj={this.exerciseObj}
                    createWorkouts={this.createWorkouts}
                    updateExercise={this.updateExercise}
                    addExerciseToWorkout={this.addExerciseToWorkout}
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

