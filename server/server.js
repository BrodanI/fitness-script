const express = require('express');
const app = express();
const PORT = 8080
const axios = require('axios');
const cors = require('cors');
const workoutRoute = require('./routes/workouts')
const exercisesRoute = require('./routes/exercises')
const workoutExerciseRoute = require('./routes/workoutExercise')

app.use(express.json());

app.use(cors());
// app.use(function(_req, res, next){
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(express.json());
app.use(express.static("public"));

app.use("/selectWorkout", workoutRoute)
app.use("/createWorkout", workoutRoute)
app.use("/createWorkout", workoutExerciseRoute)
app.use("/updateExercise", exercisesRoute)
app.use("/createExercise", exercisesRoute)
app.use("/deleteExercise", exercisesRoute)

app.listen(8080, function(){
    console.log(`listening on port ${PORT}`);
});