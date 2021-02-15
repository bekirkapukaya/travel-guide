import React from 'react';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddLocationTwoToneIcon from '@material-ui/icons/AddLocationTwoTone';
import Location from './Location';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () =>
  toast.success('Harita üzerinden konum işaretleyiniz...', {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const LocationList = () => {
  return (
    <>
      <Button
        onClick={notify}
        variant="contained"
        color="primary"
        startIcon={<AddLocationTwoToneIcon></AddLocationTwoToneIcon>}
      >
        Konum Ekle
      </Button>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="stretch"
      >
        <Location />
      </Grid>
      <ToastContainer />
    </>
  );
};

export default LocationList;
