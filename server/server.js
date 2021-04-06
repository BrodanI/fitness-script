const express = require('express');
const path = require("path");
const cors = require('cors');
// const morgan = require('morgan');
const mysql = require("mysql");
const knex = require("./knexfile");
const app = express();

const PORT = process.env.PORT || 8080
const workoutRoute = require('./routes/workouts')
const exercisesRoute = require('./routes/exercises')
const workoutExerciseRoute = require('./routes/workoutExercise')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json());
app.use(express.static("public"));

app.use("/selectWorkout", workoutRoute)
app.use("/createWorkout", workoutRoute)
app.use("/createWorkoutExercise", workoutExerciseRoute)
app.use("/updateExercise", exercisesRoute)
app.use("/createExercise", exercisesRoute)
app.use("/deleteExercise", exercisesRoute)

let connection;
// make connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(knex.development);
}

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("../client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});