"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applications_controller_1 = require("./../controllers/applications-controller");
const express_1 = __importDefault(require("express"));
const applications_controller_2 = require("../controllers/applications-controller");
const applicationRouter = express_1.default.Router();
applicationRouter.route('/applications').post(applications_controller_2.addApplication).get(applications_controller_1.getApplication);
exports.default = applicationRouter;
