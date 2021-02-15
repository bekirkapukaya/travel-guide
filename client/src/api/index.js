import axios from 'axios';
const apiEndPoint = 'http://localhost:5000/locations';

export const getLocationApi = async () => await axios.get(apiEndPoint);
export const addLocationApi = async (data) => await axios.post(apiEndPoint, data);
export const removeLocationApi = async(id) => await axios.delete(apiEndPoint, id);
export const updateLocationApi = async(id, data) => await axios.patch(apiEndPoint, id, data);
export const getSingleLocationApi = async(id) => await axios.get(apiEndPoint, id);