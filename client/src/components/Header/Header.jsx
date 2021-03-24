import React from 'react';
import "./header.scss";
import Logo from '../../assets/img/fitness_script_logo.svg';
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Header(props) {
    return (
        <div className="header">
            <img className="header__logo" src={Logo} alt="" />
            <Button color="primary">Fitness Script</Button>
            <MenuIcon color="primary"></MenuIcon>
        </div>
    );
}

export default Header;