import React from 'react';
import './selectWorkout.scss'
import Header from '../Header/Header'
import { Button, TextField, FormControl} from '@material-ui/core';
import { Link } from 'react-router-dom'


const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];



function SelectWorkout(props) {
    console.log(props.exercise)

    // const handleChange = (event) => {
    //     const workoutName = event.target.name;
    //     this.setState({
    //       [workoutName]: event.target.value,
    //     });
    //   };

    return (
        <>
            <Header />

            <div className="selectWorkout">
                <FormControl variant="filled" className="selectWorkout__select">
                    <TextField

                        id="filled-select-currency-native"
                        select
                        label="Select Workout"
                        // value={currency}
                        // onChange={handleChange}
                        // SelectProps={{
                        //     native: true,
                        // }}
                        variant="filled" >

                        {
                            currencies.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))
                        }
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

