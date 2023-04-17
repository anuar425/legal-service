import express from "express"
import dotenv from "dotenv"
import applicationRouter from "./routes/applications-router"
import { connectBase } from "./helpers/mongo-helper";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;


async function runServer () {
  await connectBase()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(applicationRouter)
  app.listen(port, () => {
  console.log(`${port} [server]`);
});
}

runServer()