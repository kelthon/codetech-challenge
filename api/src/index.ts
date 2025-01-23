import express from 'express';
import { dataSource } from './infrastructure/database/config';

const app = express();
const port = process.env.PORT || 5000;

dataSource.initialize();

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
