import dotenv from 'dotenv';

dotenv.config();
import './database/index';

import express from 'express';
import userRoutes from './routes/userRoutes';
import corridaRoutes from './routes/corridaRoutes';
import tokenRoutes from './routes/tokenRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/corridas/', corridaRoutes);
  }
}

export default new App().app;
