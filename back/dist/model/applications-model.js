"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const mongoose_1 = require("mongoose");
const applicationSchema = new mongoose_1.Schema({
    fullName: {
        type: String,
        require: true,
        minLength: 5,
    },
    phone: {
        type: Number,
        reqire: true,
        min: 99999999999,
        max: 10000000000
    },
    description: {
        type: String,
        require: false,
    }
}, {
    timestamps: true
});
const Application = (0, mongoose_1.model)('Application', applicationSchema);
exports.Application = Application;
