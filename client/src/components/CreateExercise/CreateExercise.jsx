import React from 'react';
import './createExercise.scss'
import Header from '../Header/Header'
import ExerciseDisplay from '../ExerciseDisplay/ExerciseDisplay'
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
                    />
                </div>
                <div className="createExercise__field">
                    <h3 className="createExercise__field-name">Muscle</h3>
                    <TextField
                        className="createExercise__field-input"
                        id="filled-basic"
                        label="Enter"
                        variant="filled"
                    />
                </div>
                <div className="createExercise__field">
                    <h3 className="createExercise__field-name">Reps/Time</h3>
                    <TextField
                        className="createExercise__field-input"
                        id="filled-basic"
                        label="Enter"
                        variant="filled"
                    />
                </div>
                <div className="createExercise__field createExercise__field--divider">
                    <h3 className="createExercise__field-name">Weight</h3>
                    <TextField
                        className="createExercise__field-input"
                        id="filled-basic"
                        label="Enter"
                        variant="filled"
                    />
                </div>

                <ExerciseDisplay />

                <Footer />
            </div>
        </>
    );
}

export default CreateExercise;