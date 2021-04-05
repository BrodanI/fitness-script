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
                        variant="filled"
                        label="Enter"
                        name="exerciseName"
                        error= {props.displayErrorExerciseName()}
                        helperText={props.displayErrorExerciseName() === true ? 'Please enter a name' : ''}
                        onChange={props.handleChange}
                        />
                </div>
                <div className="createExercise__field">
                    <h3 className="createExercise__field-name">Muscle</h3>
                    <TextField
                        className="createExercise__field-input"
                        label="Enter"
                        variant="filled"
                        name="muscle"
                        error= {props.displayErrorMuscle()}
                        helperText={props.displayErrorMuscle() === true ? 'Please enter a muscle group' : ''}
                        onChange={props.handleChange}
                        />
                </div>
                <div className="createExercise__field">
                    <h3 className="createExercise__field-name">Reps/Time</h3>
                    <TextField
                        className="createExercise__field-input"
                        label="Enter"
                        variant="filled"
                        name="repsTime"
                        error= {props.displayErrorRepsTime()}
                        helperText={props.displayErrorRepsTime() === true ? 'Please enter number of reps or time' : ''}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="createExercise__field">
                    <h3 className="createExercise__field-name">Weight</h3>
                    <TextField
                        className="createExercise__field-input"
                        label="Enter"
                        variant="filled"
                        name="weight"
                        onChange={props.handleChange}
                    />
                </div>

                <div className="createExercise__btn--divider">
                    <Button className="createExercise__btn-link"
                        variant="contained"
                        color="primary"
                        onClick={props.createExercise}
                    >
                        Create Exercise
                </Button>
                </div>


                {props.exercises && props.exercises.map((exercise) => {
                    return (
                        <div key={exercise.id}>
                            <ExerciseComponent exercise={exercise} updateExercise={props.updateExercise} />
                            <DeleteBtn exercise={exercise} />
                        </div>
                    )
                })
                };

                <Footer exercises={props.exercises} addExercise={props.addExercise} createExercise={props.createExercise} />
            </div>
        </>
    );
}

export default CreateExercise;