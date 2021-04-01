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

  inputRef = React.createRef()

  state = {
    workouts: [],
    exercises: [],
    id: null,
    exerciseName: null,
    muscle: null,
    respTime: null,
    weight: null,
    updated: false,
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
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
      console.log(this.state.exercises);

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
            console.log(this.state.exercises);
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
                    createExercise={this.createExercise}
                    onChange={this.onChange}
                  />}
                />
                <Route path='/createWorkout'
                  render={() => <CreateWorkout
                    workouts={this.state.workouts}
                    exercises={this.state.exercises}
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

