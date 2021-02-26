import initialStates from './initialStates';
import {
  GET_LOCATION,
  ADD_LOCATION,
  REMOVE_LOCATION,
  UPDATE_LOCATION,
  GET_SINGLE_LOCATION,
} from '../actions/actionTypes';
const locationReducer = (state = initialStates, action) => {
  switch (action.payload) {
    case GET_LOCATION:
    case ADD_LOCATION:
    case REMOVE_LOCATION:
    case UPDATE_LOCATION:
    case GET_SINGLE_LOCATION:
    default:
      return {
        ...state,
      };
  }
};

export default locationReducer;
