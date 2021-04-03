import React from 'react';
import './exerciseComponent.scss';
import { TextField } from '@material-ui/core';

class ExerciseComponent extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            exercise: this.props.exercise
        }
    }

    render() {
        return (
            <div className="exerciseComponent">
                <div className="exerciseComponent__item-row exerciseComponent__item-row--margin">
                    <TextField
                        className="exerciseComponent__item-row-single"
                        id="filled-basic"
                        label="Exercise"
                        variant="filled"
                        name="exerciseName"
                        defaultValue={this.props.exercise.exerciseName}
                        onBlur={(e) => {
                            e.preventDefault();
                            this.props.updateExercise(e, this.state.exercise.id)
                        }}
                        />
                    <TextField
                        className="exerciseComponent__item-row-single"
                        id="filled-basic"
                        label="Muscle"
                        variant="filled"
                        name="muscle"
                        defaultValue={this.props.exercise.muscle}
                        onBlur={(e) => {
                            e.preventDefault();
                            this.props.updateExercise(e, this.state.exercise.id)
                        }}
                        />
                </div>
                <div className="exerciseComponent__item-row">
                    <TextField
                        className="exerciseComponent__item-row-single"
                        id="filled-basic"
                        label="Reps/Time"
                        variant="filled"
                        name="repsTime"
                        defaultValue={this.props.exercise.repsTime}
                        onBlur={(e) => {
                            e.preventDefault();
                            this.props.updateExercise(e, this.state.exercise.id)
                        }}
                        />
                    <TextField
                        className="exerciseComponent__item-row-single"
                        id="filled-basic"
                        label="Weight"
                        variant="filled"
                        name="weight"
                        defaultValue={this.props.exercise.weight}
                        onBlur={(e) => {
                            e.preventDefault();
                            this.props.updateExercise(e, this.state.exercise.id)
                        }}
                        />
                </div>
            </div>
        )
    }
};

export default ExerciseComponent;