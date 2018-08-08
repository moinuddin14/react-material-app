import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default class Header extends Component {
    render() {
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant= "headline" color="inherit">Hello from Header</Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}