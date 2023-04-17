import mongoose from "mongoose";

async function connectBase() {
    try { 
      await mongoose.connect(`mongodb+srv://admin:<password>@law-service.3dy2vgq.mongodb.net/?retryWrites=true&w=majority`, {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
      dbName: process.env.MONGO_DB_NAME,
      })
      console.log("base connected")
    } catch (error) {
      console.log("base not connected")
    }
  }


export {
    connectBase
}