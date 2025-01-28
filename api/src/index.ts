import express from 'express';
import { authRoutes } from './interface/routes/auth.route';
import { dataSource } from './infrastructure/database/typeorm.config';
import { exceptionHandler } from './interface/middlewares/exception-handler';
import { fallbackHandler } from './interface/middlewares/fallback-handler';

/* Config */
const app = express();
const port = process.env.PORT || 5000;

/* Database */
dataSource.initialize();

/* Middlewares and routes */
app.use(express.json());
app.use('/api', authRoutes);
app.use(fallbackHandler);
app.use(exceptionHandler);

/* Starting App */
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
