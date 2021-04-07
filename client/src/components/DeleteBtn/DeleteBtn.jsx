import React from 'react';
import './deleteBtn.scss'
import axios from 'axios'
import { Button } from '@material-ui/core';

// const API_URL = process.env.NODE_ENV === "production"
//   ? 'https://pure-garden-23361.herokuapp.com'
//   : 'http://localhost:8080';


function DeleteBtn(props) {
    
    function deleteExercise () {
        axios.delete(`https://pure-garden-23361.herokuapp.com/deleteExercise/${props.exercise.id}`).then(
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