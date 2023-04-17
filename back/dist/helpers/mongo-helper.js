"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectBase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function connectBase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(`mongodb+srv://admin:<password>@law-service.3dy2vgq.mongodb.net/?retryWrites=true&w=majority`, {
                user: process.env.MONGO_USER,
                pass: process.env.MONGO_PASS,
                dbName: process.env.MONGO_DB_NAME,
            });
            console.log("base connected");
        }
        catch (error) {
            console.log("base not connected");
        }
    });
}
exports.connectBase = connectBase;
