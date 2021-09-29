import React from 'react'
import { Link } from 'react-router-dom';
import { Toolbar, AppBar, Typography, Button } from '@material-ui/core';
import useStyles from './style';
import Sign from './image/GolfandBounce.jpeg';
function Navbar () {
    const classes = useStyles();
    return(
        <div>
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Button component={Link} to="/">
                <a className="navbar-brand text-warning" href="/">
                    <img className={classes.icon} alt="sign" src={Sign} />
                    </a>
                </Button>
            </div>
            <div>
            </div>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.heading} align="left">
                    <Button className={classes.button} component={Link} to="/">Home</Button>
                </Typography>
                <Typography className={classes.heading} align="left">
                    <Button className={classes.button} component={Link} to="/about">About</Button>
                </Typography>
                <Typography className={classes.heading} align="left">
                    <Button className={classes.button} component={Link} to="/contact">Contact</Button>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navbar;