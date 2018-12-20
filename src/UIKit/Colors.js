import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import { rgbToHex } from '@material-ui/core/styles/colorManipulator';
import { capitalize } from '@material-ui/core/utils/helpers';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Section from '../components/Section';

const Colors = ({ theme }) => {
  const colors = theme.colors;
  return (
    <Section title="Colors">
      <Grid container spacing={16}>
        {Object.keys(colors).map(color => {
          const swatches = ['dark', 'main', 'light'];
          return (
            <Grid key={color} item lg={3} sm={6} xs={12}>
              <Card>
                <Grid container spacing={8}>
                  {swatches.map(swatche => {
                    const swatchesHeight = 88;
                    return (
                      <Grid
                        key={swatche}
                        item
                        xs={4}
                        style={{
                          backgroundColor: theme.palette[color][swatche],
                          height: swatchesHeight,
                        }}
                      />
                    );
                  })}
                </Grid>
                <CardContent style={{ paddingBottom: 16 }}>
                  <Typography variant="body2">
                    <b>{capitalize(color)}</b>
                    <br />
                  </Typography>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    {swatches.map(swatche => (
                      <Tooltip key={swatche} title={swatche}>
                        <span>{rgbToHex(theme.palette[color][swatche])}</span>
                      </Tooltip>
                    ))}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
};

export default withTheme()(Colors);
