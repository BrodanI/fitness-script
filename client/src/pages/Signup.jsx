import React, { Component } from 'react';
import './signup.scss'
import Logo from '../assets/img/fitness_script_logo.svg'
import { Link } from 'react-router-dom'
import { Button, TextField, FormControl } from '@material-ui/core';

class Signup extends Component {
    render() {
        return (
            <div>
                <div className="login">
                    <h1 className="login__title">Fitness Script</h1>
                    <img className="login__logo" src={Logo} alt="" />

                    <FormControl variant="filled" className="login__form">
                        <TextField
                            className="login__form-input"
                            id="filled-basic"
                            label="Username"
                            // value={currency}
                            // onChange={handleChange}
                            // SelectProps={{
                            //     native: true,
                            // }}
                            variant="filled" >
                        </TextField>

                        <TextField
                            className="login__form-input"
                            id="filled-basic"
                            label="Email"
                            // value={currency}
                            // onChange={handleChange}
                            // SelectProps={{
                            //     native: true,
                            // }}
                            variant="filled" >
                        </TextField>

                        <TextField
                            className="login__form-input"
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                        />

                        <Link className="login__form-btn--link" to='/'>
                            <Button variant="contained"
                                className="login__form-btn">
                                Sign Up
                            </Button>
                        </Link>

                    </FormControl>
                </div>
            </div>
        );
    }
}

export default Signup;