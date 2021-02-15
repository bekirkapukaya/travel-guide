import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import MapBase from './MapBase';
import LocationList from './LocationsList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '90vh',
  },
}));

const ContentLayout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <MapBase />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <LocationList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContentLayout;
