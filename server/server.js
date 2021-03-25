const express = require('express');
const app = express();
const PORT = 8080
const axios = require('axios');
const cors = require('cors');
const exercisesRoute = require('./routes/exercises')
const workoutsRoute = require('./routes/workouts')

app.use(express.json());
app.use(cors());

app.listen(8080, function(){
    console.log(`listening on port ${PORT}`);
});