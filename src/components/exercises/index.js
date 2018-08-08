import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBotton: 10
    }
}

export default props => 
    <Grid container>
        <Grid item sm>
            <LeftPane styles={styles} />
        </Grid>
        <Grid item sm>
            <RightPane styles={styles} />
        </Grid>
    </Grid>