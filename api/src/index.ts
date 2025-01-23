import express from 'express';
import { authRoutes } from './interface/routes/auth.route';
import { dataSource } from './infrastructure/database/typeorm.config';

const app = express();
const port = process.env.PORT || 5000;

dataSource.initialize();

app.use(express.json());
app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
