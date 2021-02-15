import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Divider, Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(8),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    marginTop: theme.spacing(3),
  },
  image: {
    width: '100%',
    borderRadius: 5,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  chip: {
    marginTop: theme.spacing(1),
  },
}));

const LocationDetails = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      <div>
        <div className={classes.header}>
          <Typography variant="h5" gutterBottom>
            Başlık
          </Typography>
        </div>

        <Divider />

        <Typography variant="overline" gutterBottom>
          Altbaşlık
        </Typography>

        <Typography variant="caption" component="p" gutterBottom>
          Oluşturma tarihi
        </Typography>

        <Chip label={'etiket'} variant="outlined" className={classes.chip} />

        <div className={classes.content}>
          <img src={'src'} alt="Post" className={classes.image} />
          <Typography variant="body1" gutterBottom>
            İçerik
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default LocationDetails;
