import React from 'react';
import './createExercise.scss'
import Header from '../Header/Header'
import ExerciseComponent from '../ExerciseComponent/ExerciseComponent'
import DeleteBtn from '../DeleteBtn/DeleteBtn'
import Footer from '../Footer/Footer.jsx'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

function CreateExercise(props) {

    return (
        <>
            <Header />

            <div className="createExercise">
                <div className="createExercise__field">
                    <h3 className="createExercise__field-name">Exercise</h3>
                    <TextField
                        className="createExercise__field-input"
                        id="filled-basic"
                        label="Enter"
                        variant="filled"
                        name="exerciseName"
                        onChange={props.handleChange}
                    />
                </div>
                <div className="createExercise__field">
                    <h3 className="createExercise__field-name">Muscle</h3>
                    <TextField
                        className="createExercise__field-input"
                        id="filled-basic"
                        label="Enter"
                        variant="filled"
                        name="muscle"
                        onChange={props.handleChange}
                    />
                </div>
                <div className="createExercise__field">
                    <h3 className="createExercise__field-name">Reps/Time</h3>
                    <TextField
                        className="createExercise__field-input"
                        id="filled-basic"
                        label="Enter"
                        variant="filled"
                        name="repsTime"
                        onChange={props.handleChange}
                    />
                </div>
                <div className="createExercise__field">
                    <h3 className="createExercise__field-name">Weight</h3>
                    <TextField
                        className="createExercise__field-input"
                        id="filled-basic"
                        label="Enter"
                        variant="filled"
                        name="weight"
                        onChange={props.handleChange}
                    />
                </div>

                <div className="createExercise__btn--divider">
                    <Button className="createExercise__btn-link"
                        onClick={props.createExercise}
                        variant="contained"
                        color="primary"
                        className="createExercise__btn--size">
                        Create Exercise
                </Button>
                </div>


                {props.exercises && props.exercises.map((exercise) => {
                    return (
                        <>
                            <ExerciseComponent exercise={exercise} updateExercise={props.updateExercise} />
                            <DeleteBtn exercise={exercise} />
                        </>
                    )
                })
                };

                <Footer exercises={props.exercises} addExercise={props.addExercise} createExercise={props.createExercise} />
            </div>
        </>
    );
}

export default CreateExercise;