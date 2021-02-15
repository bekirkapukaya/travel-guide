import {
  GET_LOCATION,
  ADD_LOCATION,
  REMOVE_LOCATION,
  UPDATE_LOCATION,
  GET_SINGLE_LOCATION,
} from './actionTypes';
import {
  getLocationApi,
  addLocationApi,
  removeLocationApi,
  updateLocationApi,
  getSingleLocationApi,
} from '../../api';

export const getLocation = async () => {
  try {
    const { data } = getLocationApi();
    dispach({
      type: GET_LOCATION,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addLocation = async () => {
  try {
  } catch (err) {
    console.log(err);
  }
};

export const removeLocation = async () => {
  try {
  } catch (err) {
    console.log(err);
  }
};

export const updateLocation = async () => {
  try {
  } catch (err) {
    console.log(err);
  }
};

export const getSingleLocation = async () => {
  try {
  } catch (err) {
    console.log(err);
  }
};
