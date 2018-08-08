import React, { Fragment } from "react";
import { Grid, Paper, Typography, List, ListItem, ListItemText } from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    "margin-top": 10,
    "margin-bottom": 10,
    height: 500,
    overflowY: 'auto'
  }
};

export default ({ exercises }) =>
  <Grid container sm>
    <Grid item sm style={{ "margin-right": 10 }}>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises], index) => {
          return <Fragment key={index}>
            <Typography
              key={index}
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              {group}
            </Typography>
            <List component="ul">
              {exercises.map(({ title }, index) =>
                <ListItem button key={index}>
                  <ListItemText primary={title} />
                </ListItem>
              )}
            </List>
          </Fragment>
        })}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="display1">
          Welcome!
        </Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          Please select an exercise from the left
        </Typography>
      </Paper>
    </Grid>
  </Grid>