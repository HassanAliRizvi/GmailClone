import express from "express";
import connectDB from "./connectDB.js";

connectDB();

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log("Server running....");
});


