import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import noImage from '../images/noImage.jpg';

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Typography,
} from '@material-ui/core';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Location = (props) => {
  const classes = useStyles();
  const { baslik, aciklama, kategori, goruntu, tarih, koordinatlar } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={goruntu || noImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {baslik}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {aciklama}
          </Typography>
          <Chip
            label={`# ${kategori}`}
            variant="outlined"
            className={classes.chip}
          />
          <Typography variant="body2" color="textSecondary" component="p">
            {tarih}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to="/details">Daha fazla...</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Location;
