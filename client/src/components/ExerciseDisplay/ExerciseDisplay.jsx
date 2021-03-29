import React from 'react';
import './exerciseDisplay.scss'
import { Button, TextField } from '@material-ui/core';

function ExerciseDisplay(props) {
    return (
        <>
            <div className="exerciseDisplay">
                <div className="exerciseDisplay__item-row exerciseDisplay__item-row--margin">
                    <TextField
                        className="exerciseDisplay__item-row-single"
                        id="filled-basic"
                        label="Exercise"
                        variant="filled"
                    />
                    <TextField
                        className="exerciseDisplay__item-row-single"
                        id="filled-basic"
                        label="Muscle"
                        variant="filled"
                    />
                </div>
                <div className="exerciseDisplay__item-row">
                    <TextField
                        className="exerciseDisplay__item-row-single"
                        id="filled-basic"
                        label="Reps/Time"
                        variant="filled"

                    />
                    <TextField
                        className="exerciseDisplay__item-row-single"
                        id="filled-basic"
                        label="Weight"
                        variant="filled"
                    />

                </div>

                <div className="exerciseDisplay__btn">
                    <Button variant="contained"
                        className="exerciseDisplay__btn-single">
                        Delete
                </Button>
                </div>
            </div>
        </>
    );
}

export default ExerciseDisplay;