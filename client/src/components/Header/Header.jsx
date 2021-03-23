import React from 'react';
import "./header.scss";
import Logo from '../../assets/img/fitness_script_logo.svg';
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Header(props) {
    return (
        <div className="header">
            <img className="header__logo" src={Logo} alt="" />
            <h1 className="header__name">Fitness Script</h1>
            <Button className="button">Hello World</Button>
        </div>
    );
}

export default Header;