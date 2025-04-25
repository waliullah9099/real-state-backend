/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import router from './app/router';
import cookieParser from 'cookie-parser';
import express, { Application } from 'express';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: "http://localhost:3000"}));

// application routes
app.use('/api/v1', router);

// globar err handlar 
app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
