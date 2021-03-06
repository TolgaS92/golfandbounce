import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import useStyles from './style';
import Sign from './image/GolfandBounce.jpeg';
function Navbar () {
    const classes = useStyles();
    return(
        <header>
        <nav className="navbar navbar-expand-md fixed-top navbar-light bg-danger">
            <div className="navbar-brand">
                <Button component={Link} to="/golfandbounce">
                    <img className={classes.icon} alt="sign" src={Sign} /></Button>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                <ul className="navbar-nav mr-auto flex-row ms-md-auto">
                <li className="nav-item" align="left">
                    <Button className={classes.button} component={Link} to="/golfandbounce">Home</Button>
                </li>
                <li className="nav-item" align="left">
                    <Button className={classes.button} component={Link} to="/about">Pricing</Button>
                </li>
                <li className="nav-item" align="left">
                    <Button className={classes.button} component={Link} to="/contact">Contact</Button>
                </li>
                </ul>
                <hr className="d-md-none text-white"></hr>
                <ul className="d-flex justify-content-center navbar-nav ml-auto flex-row animate__animated animate__bounce">
                <a href="https://www.instagram.com/golfandbounce/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram grow fa-2x text-primary"></i>
                </a>
                <a href="https://www.facebook.com/GolfAndBounce" target="_blank" rel="noreferrer">
                    <li className="fab fa-facebook grow fa-2x text-primary"></li>
                </a>
                <a href="mailto:golfandbounce@gmail.com" target="_blank" rel="noreferrer">
                    <i className="fas fa-envelope-open-text grow fa-2x text-primary"></i>
                </a>
                </ul>
            </div>
        </nav>
        </header>
    )
}

export default Navbar;