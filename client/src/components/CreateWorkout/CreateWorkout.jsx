import React from 'react';
import './createWorkout.scss'
import { Button, FormControl, TextField } from '@material-ui/core';
import ExerciseComponent from '../ExerciseComponent/ExerciseComponent.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header'

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
                        // defaultValue={exercise.exerciseName}
                        />
                    </div>

                    <FormControl variant="filled" className="createWorkout__input-exercise">
                    {console.log(props)}
                        <TextField
                            id="filled-select-currency-native"
                            select
                            label="Select Exercise"
                            // onChange={handleChange}
                            variant="filled" >
                            {props.exercises.map((props) => (
                                <option value={props.exerciseName}>
                                    {props.exerciseName}
                                </option>
                            ))}
                        </TextField>
                    </FormControl>
                </div>

                {props.exercises.map((exercise) => {
                    return (
                        <div className="selectWorkout__item">
                            <ExerciseComponent exercise={exercise} />
                        </div>
                    )
                })}

                <Footer />
            </div>
        </>
    );
}

export default CreateWorkout;