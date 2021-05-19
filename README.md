# Fitness Script

Hello and welcome to my BrainStation Capstone Project! This was my raducation project I built within 2 weeks. 


## Inspiration

I wanted to create a fitness app for people that have had a tough time getting back into shape since COVID (myself included).
Current fitness apps have a tendency to tell the user what exercises to do. This can lead users to doing exercises or even entire workouts that they don’t enjoy. 
We all know the feeling of breaking a habit if we don’t like doing it.

Fitness Script solves this issue by letting the user choose what exercise they do, and create workouts around those exercises.

### Technologies Used

Fitness Script was created using React, SASS, and Material UI for the Front end. Node.js, Express, MySQL, Knex, and Bookshelf for the backend.
I love front end development, so I wanted to make expand my knowedge and learn a UI framework. 
I also wanted to get some experience with Databases, so I created a MySQL database to store all the data

#### Funcitonality

Phase 1 (In Production)
- The app was built for mobile use, so it is best viewed with that screensize in mind.
- Fitness Script has 2 main pages (Login and Home), and 3 main components to it:

- Login
- Sigup
  - Two basic input fields. There is no authentication at this time.
- Home
  - Creating an exercise
    - The user is able to fill in the fileds, and add the exercise to their "library" instatnly. If the fields are empty, it will let them to know to fill it in.
  - Create a workout
    - Allows the user to create a workout name, and add the exercises they just created to the workout.
  - Select a workout
    - Displays a list of workouts the user has created.
    - If the user updates the field with new data, the field auto saves it to the database!
