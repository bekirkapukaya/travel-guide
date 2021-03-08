import React from 'react';
import { useSelector } from 'react-redux';
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
  const locations = useSelector((state) => state.location.locations);
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
        {locations.map((location) => {
          return (
            <Location
              key={location._id}
              baslik={location.baslik}
              aciklama={location.aciklama}
              kategori={location.kategori}
              goruntu={location.goruntu}
              tarih={location.createdAt}
              koordinatlar={location.koordinatlar}
            />
          );
        })}
      </Grid>
      <ToastContainer />
    </>
  );
};

export default LocationList;
