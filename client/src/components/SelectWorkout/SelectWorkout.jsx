import React from 'react';
import './selectWorkout.scss'
import Header from '../Header/Header'
import ExerciseComponent from '../ExerciseComponent/ExerciseComponent'
import Footer from "../Footer/Footer"
import { TextField, FormControl } from '@material-ui/core';

class SelectWorkout extends React.Component {

    componentDidMount() {
        this.props.changeWorkout(null)
    }

    render() {
        return (
            <>
                <Header />
                <div className="selectWorkout">
                    <FormControl variant="filled" className="selectWorkout__select">
                        <TextField
                            select
                            variant="filled"
                            label="Select Workout"
                            defaultValue=''
                            onChange={(e) => this.props.changeWorkout(e.target.value)}
                        >
                            {this.props.workouts.map((workout) => (
                                <option key={workout.id} value={workout.id}>
                                    {workout.workoutName}
                                </option>
                            ))}
                        </TextField>
                    </FormControl>

                    {this.props.currentWorkoutExercises.map((exercise) => {
                        return (
                            <div key={exercise.id} className="selectWorkout__item">
                                <ExerciseComponent exercise={exercise} updateExercise={this.props.updateExercise} />
                            </div>
                        )
                    })};

                    <Footer />

                </div>
            </>
        );
    }
}

export default SelectWorkout;

