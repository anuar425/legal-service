"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApplication = exports.addApplication = void 0;
const applications_model_1 = require("../model/applications-model");
const addApplication = (req, res) => {
    const application = new applications_model_1.Application(Object.assign({}, req.body));
    application.save().then((result) => {
        console.log(result);
        res.sendStatus(200);
    }).catch(error => {
        console.log(error);
        res.sendStatus(400);
    });
};
exports.addApplication = addApplication;
const getApplication = (req, res) => {
    applications_model_1.Application.find().then((applications) => {
        console.log(applications);
        res.send(applications);
    }).catch((error) => {
        console.log(error);
    });
};
exports.getApplication = getApplication;
