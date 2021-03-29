const express = require('express');
const app = express();
const PORT = 8080
const axios = require('axios');
const cors = require('cors');
const workoutRoute = require('./routes/workouts')
const exercisesRoute = require('./routes/exercises')

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
app.use("/createExercise", exercisesRoute)
app.use("/createWorkout", workoutRoute)

app.listen(8080, function(){
    console.log(`listening on port ${PORT}`);
});