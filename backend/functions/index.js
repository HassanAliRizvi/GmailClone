import express from "express"; // react style
import dotenv from "dotenv";
import connectDB from "../connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "../routes/user_routes.js";
import emailRoute from "../routes/email_routes.js";

dotenv.config({});
connectDB();
const PORT = 8080;
const app = express();

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin:'*',
    credentials:true
}
app.use(cors(corsOptions));

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/email", emailRoute);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at port ${PORT}`);
});




