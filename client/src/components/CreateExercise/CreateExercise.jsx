import React from 'react';
import './createExercise.scss'
import Header from '../Header/Header'
import ExerciseComponent from '../ExerciseComponent/ExerciseComponent'
import DeleteBtn from '../DeleteBtn/DeleteBtn'
import Footer from '../Footer/Footer.jsx'
import TextField from '@material-ui/core/TextField';

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
                        onChange={props.onChange}
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
                        onChange={props.onChange}
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
                        onChange={props.onChange}
                    />
                </div>
                <div className="createExercise__field createExercise__field--divider">
                    <h3 className="createExercise__field-name">Weight</h3>
                    <TextField
                        className="createExercise__field-input"
                        id="filled-basic"
                        label="Enter"
                        variant="filled"
                        name="weight"
                        onChange={props.onChange}
                    />
                </div>

                {props.exercises && props.exercises.map((exercise) => {
                    console.log(props.exercises);
                    return (
                        <>
                            <ExerciseComponent exercise={exercise} />
                            <DeleteBtn exercise={exercise} />
                        </>
                    )
                })
                };

                <Footer exercises={props.exercises} addExercise={props.addExercise} />
            </div>
        </>
    );
}

export default CreateExercise;