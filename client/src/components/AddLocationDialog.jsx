import React, { useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  Slide,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FileBase64 from 'react-file-base64';

import { useFormik } from 'formik';
import * as yup from 'yup';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const validationSchema = yup.object({
  baslik: yup
    .string('Konu başlığını giriniz...')
    .required('Konu başlığı gerekli...'),
  aciklama: yup
    .string('Lütfen açıklama giriniz...')
    .required('Açıklama gerekli...'),
  kategori: yup
    .string('Lütfen kategori seçiniz...')
    .required('Kategori gerekli...'),
});

const AddLocationDialog = ({ open, handleClose, currentCoordinates }) => {
  const [file, setFile] = useState(null);

  const locationOnsubmit = (values) => {
    console.log({ values, currentCoordinates, file });
    clearForm();
  };

  const clearForm = (resetForm) => {
    setFile(null);
    handleClose();
  };

  const formik = useFormik({
    initialValues: {
      baslik: '',
      aciklama: '',
      kategori: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      locationOnsubmit(values);
      resetForm();
    },
  });

  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {'Lütfen konum bilgilerini giriniz!'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Konum ile ilgili form bilgilerini doldurunuz.
          </DialogContentText>
          <div>
            <form id="locationDialog" onSubmit={formik.handleSubmit}>
              {formik.errors.baslik}
              <TextField
                className={classes.textField}
                fullWidth
                id="baslik"
                name="baslik"
                label="Başlık"
                variant="outlined"
                value={formik.values.baslik}
                onChange={formik.handleChange}
                error={formik.touched.baslik && !!formik.errors.baslik}
              />
              {formik.errors.aciklama}
              <TextField
                className={classes.textField}
                fullWidth
                id="aciklama"
                name="aciklama"
                label="Açıklama"
                variant="outlined"
                value={formik.values.aciklama}
                onChange={formik.handleChange}
                error={formik.touched.aciklama && !!formik.errors.aciklama}
              />
              {formik.errors.kategori}
              <InputLabel>Kategori</InputLabel>
              <Select
                className={classes.textField}
                fullWidth
                id="kategori"
                name="kategori"
                label="Kategori"
                value={formik.values.kategori}
                onChange={formik.handleChange}
                error={formik.touched.kategori && !!formik.errors.kategori}
              >
                <MenuItem value={'Tarihi_Mekan'}>Tarihi Mekan</MenuItem>
                <MenuItem value={'Dogal_Guzellik'}>Doğal Güzellik</MenuItem>
              </Select>

              <InputLabel>Koordinatlar:</InputLabel>
              {currentCoordinates[0] + ` ` + currentCoordinates[1]}
              <br />
              <br />
              <FileBase64
                multiple={false}
                onDone={(base64) => setFile(base64)}
              />
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button type="submit" form="locationDialog" color="primary">
            Kaydet
          </Button>
          <Button onClick={clearForm} color="secondary">
            Vazgeç
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddLocationDialog;
