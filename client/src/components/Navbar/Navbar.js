import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import useStyles from './style';
import Sign from './image/GolfandBounce.jpeg';
function Navbar () {
    const classes = useStyles();
    return(
        <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="navbar-brand">
                <Button component={Link} to="/">
                    <img className={classes.icon} alt="sign" src={Sign} /><span className="text-warning">  Golf and Bounce</span></Button>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item" align="left">
                    <Button className={classes.button} component={Link} to="/">Home</Button>
                </li>
                <li className="nav-item" align="left">
                    <Button className={classes.button} component={Link} to="/about">Information</Button>
                </li>
                <li className="nav-item" align="left">
                    <Button className={classes.button} component={Link} to="/contact">Contact</Button>
                </li>
                </ul>
            </div>
        </nav>
        </header>
    )
}

export default Navbar;