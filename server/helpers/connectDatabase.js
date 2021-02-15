import mongoose from 'mongoose';

const connectDatabase = () => {
  const { DATABASE_URL } = process.env;
  mongoose
    .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Database connection successfull...');
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDatabase;
