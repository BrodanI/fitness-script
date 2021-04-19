import React from 'react';
import './menu.scss'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


function Menu(props) {
    return (
        <div className="menu">
            <div className="menu__btn">
                <Link className="menu__link" to="/home">
                    <Button 
                    variant="contained" 
                    color="primary"
                    className="menu__btn--size" 
                    style={{ minWidth: '90%' }}>
                        Home
                    </Button>
                </Link>
            </div >
            <div className="menu__btn">
                <Link className="menu__link" to="/createExercise">
                    <Button 
                    variant="contained" 
                    color="primary"
                    className="menu__btn--size" 
                    style={{ minWidth: '90%' }}>
                        Create Exercise
                    </Button>
                </Link>
            </div >
            <div className="menu__btn">
                <Link className="menu__link" to="/createWorkout">
                    <Button 
                    variant="contained" 
                    color="primary"
                    className="menu__btn--size" 
                    style={{ minWidth: '90%' }}>
                        Create Workout
                    </Button>
                </Link>
            </div >
            <div className="menu__btn">
                <Link className="menu__link">
                    <Button 
                    variant="contained" 
                    color="primary"
                    className="menu__btn--size" 
                    style={{ minWidth: '90%' }}>
                        Settings
                    </Button>
                </Link>
            </div >
            <div className="menu__btn">
                <Link className="menu__link">
                    <Button 
                    variant="contained" 
                    color="primary"
                    className="menu__btn--size" 
                    style={{ minWidth: '90%' }}>
                        Calendar
                    </Button>
                </Link>
            </div >
            <div className="menu__btn">
                <Link className="menu__link" to="/">
                    <Button 
                    variant="contained" 
                    color="primary"
                    className="menu__btn--size" 
                    style={{ minWidth: '90%' }}>
                        Logout
                    </Button>
                </Link>
            </div >
        </div >
    );
}

export default Menu;