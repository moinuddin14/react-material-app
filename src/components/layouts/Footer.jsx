import React, { Component } from "react";
import { Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Paper>
          <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
            <Tab label="All" />
            {this.props.muscles.map((muscle, index) => {
              return <Tab key={index} label={muscle} />;
            })}
          </Tabs>
        </Paper>
      </div>
    );
  }
}
