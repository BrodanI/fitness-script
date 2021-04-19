import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./header.scss";
import Logo from '../../assets/img/fitness_script_logo.svg';
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '../Menu/Menu'

class Header extends Component {

    state = {
        display: false
    }

    displayMenu = () => {
        this.state.display === false ? 
        this.setState({
            display:true
        })
        :
        this.setState({
            display:false
        })
    }

    render() {
        return (
            <div className="header">
                <Link to="/">
                    <img className="header__logo" src={Logo} alt="" />
                </Link>
                <Link to="/home" className="header__title" >
                    <Button color="primary" style={{ fontSize: 24 }}>Fitness Script</Button>
                </Link>

                <MenuIcon color="primary" style={{ fontSize: 30 }} onClick={this.displayMenu} ></MenuIcon>

                {this.state.display && (
                    <Menu />
                )}

            </div>
        );
    }
}

export default Header;