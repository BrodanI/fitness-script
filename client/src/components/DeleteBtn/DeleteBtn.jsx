import React from 'react';
import './deleteBtn.scss'
import axios from 'axios'
import { Button } from '@material-ui/core';

function DeleteBtn(props) {
    
    function deleteExercise () {
        axios.delete(`http://localhost:8080/deleteExercise/${props.exercise.id}`).then(
            window.location.reload()
        );
    }

    return (
        <div className="delete__btn">
            <Button
                variant="contained"
                className="delete__btn-single"
                onClick={deleteExercise}
                >
                Delete
            </Button>
        </div>
    );
}

export default DeleteBtn;