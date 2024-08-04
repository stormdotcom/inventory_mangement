import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import invoiceRoutes from './routes/invoiceRoutes.js';
import { errorHandler } from './middlewares/errorMiddleware.js';
import { notFound } from './middlewares/notFoundMiddleware.js';
import { loggerMiddleware } from './middlewares/loggerMiddleware.js';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(loggerMiddleware);


app.use('/api/invoices', invoiceRoutes);

app.use(notFound);


app.use(errorHandler);

export default app;
