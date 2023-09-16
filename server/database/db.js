import mongoose from "mongoose";

const Connection = async (userName, userPassword, remainUrl) => {
const URL = `mongodb+srv://${userName}:${userPassword}@${remainUrl}`;
    try {
        await mongoose.connect(URL,{useUnifiedTopology: true});
        console.log("Database connected successfully");
    } catch (error) {
        console.log("error while connecting to the database",error);
    }
}

export default Connection;