import express, { Express } from 'express';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import dotenv from 'dotenv';

dotenv.config();

import {router} from "./src/routes/index";

const app: Express = express();
const port = process.env.PORT;

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// load router
for (const route of router) {
  app.use(route.getPrefix(), route.getRouter());
}

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});