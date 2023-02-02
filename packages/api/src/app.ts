require("dotenv").config();
import express from "express";
import config from "config";
import validateEnv from "./utils/validateEnv";
import { AppDataSource } from "./utils/data-source";
import router from "./routes";

AppDataSource.initialize()
  .then(async () => {
    // Validate ENV
    validateEnv();

    const app = express();

    // Body parser
    app.use(express.json({ limit: "10kb" }));

    // Allow all origins
    app.all('/*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST, PATCH');
      next();
    });

    // Routes
    app.use("/items", router);
    const port = config.get<number>("port");
    app.listen(port);

    console.log(`Server started on port: ${port}`);
  })
  .catch((error) => console.log(error));
