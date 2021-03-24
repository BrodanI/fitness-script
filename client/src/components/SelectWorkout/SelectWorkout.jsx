import React from 'react';
import './selectWorkout.scss'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';





function SelectWorkout(props) {
    console.log(props.exercise)

    // const handleChange = (event) => {
    //     const workoutName = event.target.name;
    //     this.setState({
    //       [workoutName]: event.target.value,
    //     });
    //   };

    return (
        <div className="selectWorkout">
            <FormControl variant="filled" className="selectWorkout__select">
                <InputLabel>Workout Name</InputLabel>
                <Select
                    native
                    // value={state.age}
                    // onChange={handleChange}
                    inputProps={{
                        name: 'Workout Name',
                        id: 'filled-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
            </FormControl>
            <div className="selectWorkout__category">
                <h2>Exercise</h2>
                <h2>Muscle</h2>
                <h2>Reps/Time</h2>
                <h2>Weight</h2>
            </div>

            <div>
                {props.exercise.map((exercise) => {
                    return (
                        <div className="selectWorkout__item">
                            <TextField 
                            className="selectWorkout__item-single"
                            id="outlined-basic"
                            // label="Outlined" 
                            variant="outlined" 
                            defaultValue={exercise.exerciseName}
                            />
                            <TextField 
                            className="selectWorkout__item-single"
                            id="outlined-basic"
                            // label="Outlined" 
                            variant="outlined" 
                            defaultValue={exercise.muscle}
                            />
                            <TextField 
                            className="selectWorkout__item-single"
                            id="outlined-basic"
                            // label="Outlined" 
                            variant="outlined" 
                            defaultValue={exercise.repsTime}
                            />
                            <TextField 
                            className="selectWorkout__item-single"
                            id="outlined-basic"
                            // label="Outlined" 
                            variant="outlined" 
                            defaultValue={exercise.weight}
                            />

                            {/* <TextField
                                error
                                id="outlined-error-helper-text"
                                label="Error"
                                defaultValue={exercise.exerciseName}
                                helperText="Incorrect entry."
                                variant="outlined"
                            /> */}
                        </div>
                    )
                })
                };
            </div>


        </div>
    );
}

export default SelectWorkout;

