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

export const deleteLocation = async (req, res) => {
  try {
    const { id: _id } = req;
    const location = await Locations.findByIdAndDelete(_id);
    res.status(200).json(location);
  } catch (err) {
    res.status(409).json({
      message: err.message,
    });
  }
};

export const updateLocation = async (req, res) => {
  try {
    const { id: _id } = req;
    const location = await Locations.findByIdAndUpdate(_id);
    res.status(200).json(location);
  } catch (err) {
    res.status(409).json({
      message: err.message,
    });
  }
};

export const getSingleLocation = async (req, res) => {
  try {
    const { id: _id } = req;
    const location = await Locations.findById(_id);
    res.status(200).json(location);
  } catch (err) {
    res.status(409).json({
      message: err.message,
    });
  }
};
