import "reflect-metadata";
import express, { Application } from 'express';
import expressPino from "express-pino-logger";
import SwaggerUI from "swagger-ui-express";
import SwaggerJsDoc from "swagger-jsdoc";
import { dbCreateConnection }  from './database';
import { options } from "./swagger/swaggerOptions";
import cors from 'cors';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser  from 'cookie-parser';
import authMiddleware from './middleware/auth';
import auth from './routes/auth';
import profile from './routes/profile';

class Server {
  private app: Application;

  constructor() {
    this.app = express();
    this.configuration();
    this.routes();
  }

  public configuration() {
    dotenv.config();

    const PORT = process.env.PORT || '5000';
    this.app.set('port', PORT);

    this.app.use(cors({
      credentials: true,
      origin: true,
    }));
    this.app.use(express.json());

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.app.use(cookieParser(process.env.SECRET));
    
    // logger
    if (process.env.PRODUCTION) {
      this.app.use(expressPino());
    }
  }

  public routes() {
    // swagger
    const specs = SwaggerJsDoc(options);
    this.app.use('/docs', SwaggerUI.serve, SwaggerUI.setup(specs));

    this.app.use('/api/v1/auth', auth);
    this.app.use('/api/v1/profile', authMiddleware, profile);
  }

  public async start() {
    await dbCreateConnection();

    this.app.listen(this.app.get('port'), () => {
      console.log("Server running on port", this.app.get('port'));
    });
  }
}

const server = new Server();
server.start();