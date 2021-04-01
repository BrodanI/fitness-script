import React from 'react';
import './selectWorkout.scss'
import Header from '../Header/Header'
import ExerciseComponent from '../ExerciseComponent/ExerciseComponent'
import axios from 'axios'
import { Button, TextField, FormControl } from '@material-ui/core';
import { Link } from 'react-router-dom'

class SelectWorkout extends React.Component {
    displayExercises = (event) => {
        // this.setState({
        //   workouts: event.target.value,
        // });
    };

    render() {

        // if ref is not equal to onBlur && state has changed then do put request



        // if (this.exerciseNameRef !== onBlur() && this.state.exercises){
        //     const updateExercise = (e, id) => {
        //         e.preventDefault();
        //         console.log("PR button clicked");

        //         axios.put(`http://localhost:8080/updateExercise/${id}`, {

        //           exerciseName: this.state.exercises.exerciseName,
        //           muscle: this.state.muscle,
        //           repsTime: this.state.repsTime,
        //           weight: this.state.weight

        //         }).then((response) => {
        //           axios.get('http://localhost:8080/createExercise').then((response) => {

        //             console.log(response.data);
        //             this.setState({
        //               exercises: response.data,
        //             });
        //           })
        //         })
        //       }
        // }

        return (
            <>
                <Header />

                <div className="selectWorkout">
                    <FormControl variant="filled" className="selectWorkout__select">
                        <TextField
                            select
                            variant="filled"
                            label="Select Workout"
                            onChange={this.displayExercises}
                        >
                            {this.props.workouts.map((props) => (
                                <option value={this.props.workoutName}>
                                    {this.props.workoutName}
                                </option>
                            ))}
                        </TextField>
                    </FormControl>

                    {this.props.exercises.map((exercise) => {
                        return (
                            <div className="selectWorkout__item">
                                <ExerciseComponent exercise={exercise} updateExercise={this.props.updateExercise}/>
                            </div>
                        )
                    })};

                    <div className="selectWorkout__btn">
                        <Link className="selectWorkout__btn-link" to="/">
                            <Button variant="contained"
                                color="primary"
                                className="selectWorkout__btn--size">
                                Finish!
                        </Button>
                        </Link>
                    </div>

                </div>
            </>
        );
    }
}

export default SelectWorkout;

