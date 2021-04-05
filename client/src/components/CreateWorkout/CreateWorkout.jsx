import React from 'react';
import './createWorkout.scss'
import { FormControl, TextField } from '@material-ui/core';
import ExerciseComponent from '../ExerciseComponent/ExerciseComponent.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header'
import { Button } from '@material-ui/core';


class CreateWorkout extends React.Component {

    componentDidMount() {
        this.props.changeWorkout(null)
    }

    render() {
        return this.props.exercises && this.props.workouts && (
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
                                onChange={this.props.handleChange}
                                onBlur={() => { this.props.createWorkouts() }}
                            />
                        </div>

                        <FormControl variant="filled" className="createWorkout__input-exercise">
                            <TextField
                                select
                                label="Select Exercise"
                                variant="filled"
                                defaultValue=""
                                onChange={this.props.exerciseObj}
                            >
                                {this.props.exercises.map((exercise) => (
                                    <option key={exercise.id} value={exercise.exerciseName}>
                                        {exercise.exerciseName}
                                    </option>
                                ))}
                            </TextField>
                        </FormControl>
                    </div>

                    <div className="createWorkout__btn--divider">
                        <Button className="createWorkout__btn-link"
                            onClick={this.props.workoutExerciseDisplay}
                            variant="contained"
                            color="primary"
                            >
                            Add Exercise
                        </Button>
                    </div>

                    {this.props.currentWorkoutExercises.map((exercise) => {
                        return (
                            <div key={exercise.id} className="createWorkout__item">
                                <ExerciseComponent
                                    exercise={exercise}
                                    updateExercise={this.props.updateExercise}
                                />
                            </div>
                        )
                    })}

                    <Footer />
                </div>
            </>
        );
    }
}

export default CreateWorkout;