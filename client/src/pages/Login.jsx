import React, { Component } from 'react';
import './login.scss'
import Logo from '../assets/img/fitness_script_logo.svg'
import { Link } from 'react-router-dom'
import { Button, TextField, FormControl } from '@material-ui/core';

class Login extends Component {


    render() {
        return (
            <div className="login">
                <h1 className="login__title">Fitness Script</h1>
                <img className="login__logo" src={Logo} alt="" />

                <FormControl variant="filled" className="login__form">
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
                            Sign In
                    </Button>
                    </Link>

                    <Link className="login__form-btn--link" to='/login/signup'>
                        <Button variant="contained"
                            className="login__form-btn">
                            Create an Account
                    </Button>
                    </Link>

                </FormControl>
            </div>
        );
    }
}

export default Login;