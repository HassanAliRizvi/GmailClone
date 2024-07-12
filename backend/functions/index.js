import express from 'express';
import connectDB from '../connectDB.js';
import cookieParser from 'cookie-parser';
import userRoute from '../routes/user_routes.js';
import emailRoute from '../routes/email_routes.js';
import cors from 'cors';
const BASE_URL = process.env.BASE_URL;

// Define cors options before using them
const corsOption = {
    baseURL: BASE_URL,
    credentials: true
};

// Connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));

// Routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/email', emailRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}....`);
});


