import Locations from '../models/Locations';

export const createLocation = async (req, res) => {
  const data = req.body;
  const dataModify = {
    ...data.values,
    koordinatlar: data.currentCoordinates,
    goruntu: data.file,
  };
  const newLocation = new Locations(dataModify);
  try {
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (err) {
    res.status(409).json({
      message: err.message,
    });
  }
};

export const getLocations = async (req, res) => {
  try {
    const locations = await Locations.find();
    res.status(200).json(locations);
  } catch (err) {
    res.status(409).json({
      message: err.message,
    });
  }
};
