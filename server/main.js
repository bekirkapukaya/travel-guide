import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routers';
import connectDatabase from './helpers/connectDatabase';

dotenv.config({ path: './config/conf.env' });
const { PORT } = process.env;

const app = express();
connectDatabase();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT || 5000, () => {
  console.log('Server active...');
});
