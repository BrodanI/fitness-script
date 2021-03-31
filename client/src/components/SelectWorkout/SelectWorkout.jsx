import React from 'react';
import './selectWorkout.scss'
import Header from '../Header/Header'
import { Button, TextField, FormControl } from '@material-ui/core';
import { Link } from 'react-router-dom'

function SelectWorkout(props) {
    console.log(props.exercises)

    const displayExercises = (event) => {

      };

    return (
        <>
            <Header />
            <div className="selectWorkout">
                <FormControl variant="filled" className="selectWorkout__select">
                    <TextField
                        select
                        variant="filled"
                        label="Select Workout"
                        onChange={displayExercises}
                         >

                        {/* {console.log(props.workouts)} */}
                        {props.workouts.map((props) => (
                            <option value={props.workoutName}>
                                {props.workoutName}
                            </option>
                        ))}
                    </TextField>
                </FormControl>

                {props.exercises.map((exercise) => {
                    return (
                        <div className="selectWorkout__item">
                            <div className="selectWorkout__item-row selectWorkout__item-row--margin">
                                <TextField
                                    className="selectWorkout__item-row-single"
                                    id="filled-basic"
                                    label="Exercise"
                                    variant="filled"
                                    defaultValue={exercise.exerciseName}
                                />
                                <TextField
                                    className="selectWorkout__item-row-single"
                                    id="filled-basic"
                                    label="Muscle"
                                    variant="filled"
                                    defaultValue={exercise.muscle}
                                />
                            </div>
                            <div className="selectWorkout__item-row">
                                <TextField
                                    className="selectWorkout__item-row-single"
                                    id="filled-basic"
                                    label="Reps/Time"
                                    variant="filled"
                                    defaultValue={exercise.repsTime}
                                />
                                <TextField
                                    className="selectWorkout__item-row-single"
                                    id="filled-basic"
                                    label="Weight"
                                    variant="filled"
                                    defaultValue={exercise.weight}
                                />
                            </div>
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

                    <Link className="selectWorkout__btn-link" to="/">
                        <Button variant="contained"
                            color="primary"
                            className="selectWorkout__btn--size">
                            Update PR!
                </Button>
                    </Link>
                </div>

            </div>
        </>
    );
}

export default SelectWorkout;

