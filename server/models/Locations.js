import mongoose from 'mongoose';

const LocationSchema = mongoose.Schema({
  baslik: String,
  aciklama: String,
  kategori: String,
  koordinatlar: Array,
  goruntu: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Locations = mongoose.model('Locations', LocationSchema);

export default Locations;
