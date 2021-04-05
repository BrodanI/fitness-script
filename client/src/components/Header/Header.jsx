import React from 'react';
import { Link } from 'react-router-dom'
import "./header.scss";
import Logo from '../../assets/img/fitness_script_logo.svg';
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Header(props) {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src={Logo} alt="" />
            </Link>
            <Link to="/home" className="header__title" >
                <Button color="primary" style={{ fontSize: 24 }}>Fitness Script</Button>
            </Link>
            <Link to ="/home/sideMenu">
                <MenuIcon color="primary" style={{ fontSize: 30 }}></MenuIcon>
            </Link>
        </div>
    );
}

export default Header;