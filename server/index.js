import express from "express";
import Connection from "./database/db.js";
import router from "./routs/routs.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 8000;

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use('/',router)


// Database connection start //
const userName = process.env.DB_USERNAME;
const userPassword = process.env.DB_PASSWORD;
const remainUrl = process.env.DB_REMAIN_URL;
Connection(userName, userPassword, remainUrl);
// Database connnection end //


app.listen(PORT, () => console.log(`server running on port ${PORT}`))