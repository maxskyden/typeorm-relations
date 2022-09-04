import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'
import morgan from 'morgan';
import cors from 'cors';

import routes from './routes';
import AppError from './AppError';
import './containers';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  },
);
 export {app}
