import React from 'react';
import './home.scss'
import Header from '../components/Header/Header'
import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <>
            <Header />
            <div className="home">

                <h2 className="home__progress">Progress Bar: Coming soon!</h2>
                <Link to="/selectWorkout" className="home__select-workout"><h2>Select Workout</h2></Link>

                <div className="home__create">
                    <Link to="/createExercise" className="home__create-exercise"><h2>Create your Exercise</h2></Link>
                    <Link to="/createWorkout" className="home__create-workout"><h2>Create your Workout</h2></Link>
                </div>
            </div>
        </>
    );
}

export default Home;