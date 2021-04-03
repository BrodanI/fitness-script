import React from 'react';
import './createWorkout.scss'
import axios from 'axios'
import { FormControl, TextField } from '@material-ui/core';
import ExerciseComponent from '../ExerciseComponent/ExerciseComponent.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header'
import { Button } from '@material-ui/core';


function CreateWorkout(props) {

    return props.exercises && props.workouts && (
        <>
            <Header />
            <div className="createWorkout">
                <div className="createWorkout__input">
                    <div className="createWorkout__input-workout--margin">
                        <TextField
                            className="createWorkout__input-workout"
                            id="filled-basic"
                            label="Name Workout"
                            variant="filled"
                            name="workoutName"
                            defaultValue=""
                            onChange={props.handleChange}
                            onBlur={() => {props.createWorkouts()}}
                        />
                    </div>

                    <FormControl variant="filled" className="createWorkout__input-exercise">
                        <TextField
                            select
                            label="Select Exercise"
                            variant="filled" 
                            onChange={props.exerciseObj}
                            >
                            {props.exercises.map((props) => (
                                <option value={props.exerciseName}>
                                    {props.exerciseName}
                                </option>
                            ))}
                        </TextField>
                    </FormControl>
                </div>

                <div className="createWorkout__btn--divider">
                    <Button className="createWorkout__btn-link"
                        onClick= {props.addExerciseToWorkout}
                        variant="contained"
                        color="primary"
                        className="createWorkout__btn--size">
                        Add Exercise
                </Button>
                </div>

                {props.exercises.map((exercise) => {
                    return (
                        <div className="createWorkout__item">
                            <ExerciseComponent exercise={exercise} updateExercise={props.updateExercise} />
                        </div>
                    )
                })}

                <Footer />
            </div>
        </>
    );
}

export default CreateWorkout;