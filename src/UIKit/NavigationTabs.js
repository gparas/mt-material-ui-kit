import React, { Component } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Section from "../components/Section";

class NavigationTabs extends Component {
  state = {
    valuePrimary: 0,
    valueSecondary: 0
  };
  handlePrimaryChange = (event, valuePrimary) => {
    this.setState({ valuePrimary });
  };
  handleSecondaryChange = (event, valueSecondary) => {
    this.setState({ valueSecondary });
  };
  render() {
    const { valuePrimary, valueSecondary } = this.state;
    return (
      <Section title="Navigation Tabs">
        <Grid container spacing={24}>
          <Grid item md={6} xs={12}>
            <Typography variant="h5" component="h4" gutterBottom>
              Primary
            </Typography>
            <Paper square>
              <Tabs
                value={valuePrimary}
                indicatorColor="primary"
                textColor="primary"
                onChange={this.handlePrimaryChange}
              >
                <Tab label="Active" />
                <Tab label="Active" />
                <Tab label="Disabled" disabled />
              </Tabs>
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="h5" component="h4" gutterBottom>
              Secondary
            </Typography>
            <Paper square>
              <Tabs
                value={valueSecondary}
                indicatorColor="secondary"
                textColor="secondary"
                onChange={this.handleSecondaryChange}
              >
                <Tab label="Active" />
                <Tab label="Active" />
                <Tab label="Disabled" disabled />
              </Tabs>
            </Paper>
          </Grid>
        </Grid>
      </Section>
    );
  }
}

export default NavigationTabs;
