import React from 'react';
import './createWorkout.scss'
import { Button, FormControl, TextField } from '@material-ui/core';
import ExerciseDisplay from '../ExerciseDisplay/ExerciseDisplay.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header'

function CreateWorkout(props) {
    return (
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
                        <TextField
                            id="filled-select-currency-native"
                            select
                            label="Select Exercise"
                            // value={currency}
                            // onChange={handleChange}
                            // SelectProps={{
                            //     native: true,
                            // }}
                            variant="filled" >

                            {/* {
                        currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                            ))
                        } */}
                        </TextField>
                    </FormControl>
                </div>

                <div>
                    <ExerciseDisplay />
                </div>

                <Footer />
            </div>
        </>
    );
}

export default CreateWorkout;