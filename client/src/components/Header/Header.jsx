import React from 'react';
import {Link} from 'react-router-dom'
import "./header.scss";
import Logo from '../../assets/img/fitness_script_logo.svg';
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Header(props) {
    return (
        <div className="header">
            <img className="header__logo" src={Logo} alt="" />
            <Link to="/" className="header__title" >
                <Button color="primary" style={{ fontSize: 24 }}>Fitness Script</Button>
            </Link>
            <MenuIcon color="primary" style={{ fontSize: 30 }}></MenuIcon>
        </div>
    );
}

export default Header;