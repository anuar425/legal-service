import { getApplication } from './../controllers/applications-controller';
import express , { Request, Response } from "express";
import { addApplication } from "../controllers/applications-controller";

const applicationRouter = express.Router()

applicationRouter.route('/applications').post(addApplication).get(getApplication)

export default applicationRouter