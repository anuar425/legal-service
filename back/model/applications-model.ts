import {Schema, model} from "mongoose";

const applicationSchema = new Schema({
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
})

const Application = model('Application', applicationSchema)

export {Application}

