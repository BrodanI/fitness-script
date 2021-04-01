import React from 'react';
import './deleteBtn.scss'
import { Button } from '@material-ui/core';

function DeleteBtn(props) {
    return (

        // console.log(exercise.id)
        // const deleteExercise = (exercise) => {
        //     console.log("delete");
        // axios.delete(`http://localhost:8080/deleteExercise/${exercise.id}`).then(
        //     window.location.reload()
        // );
        // }

        <div className="delete__btn">
            <Button
                variant="contained"
                className="delete__btn-single"
            // onClick={this.deleteExercise}
            >
                Delete
        </Button>
        </div>
    );
}

export default DeleteBtn;