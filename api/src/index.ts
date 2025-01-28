import express from 'express';
import { config } from './infrastructure/config/config';
import { dataSource } from './infrastructure/database/typeorm.config';
import { logger } from './infrastructure/logger';
import { exceptionHandler } from './interface/middlewares/exception-handler';
import { fallbackHandler } from './interface/middlewares/fallback-handler';
import { requestsLoggerHandler } from './interface/middlewares/requests-logger-handler';
import { authRoutes } from './interface/routes/auth.route';
import { studentRoutes } from './interface/routes/student.route';

/* Config */
const app = express();
const port = config.port;

/* Database */
dataSource.initialize();

/* Middlewares and routes */
app.use(express.json());
app.use(requestsLoggerHandler);
app.use('/api', authRoutes);
app.use('/api', studentRoutes);
app.use(fallbackHandler);
app.use(exceptionHandler);

/* Starting App */
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
