import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; // Import jwt module for token creation
import { User } from "../Models/user_model.js";

export const register = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email", success: false });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            fullname,
            email,
            password: hashPassword
        });

        // Create JWT token
        const tokenData = {
            userId: newUser._id
        };

        const token = jwt.sign(tokenData, 'your_secret_key', { expiresIn: '1d' });

        return res.status(201).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            message: "Account created successfully",
            success: true,
            user: newUser
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Incorrect email or password", success: false });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Incorrect email or password", success: false });
        }

        // Create JWT token
        const tokenData = {
            userId: user._id
        };

        const token = jwt.sign(tokenData, 'your_secret_key', { expiresIn: '1d' });

        return res.status(200)
            .cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' })
            .json({
                message: `${user.fullname} logged in successfully`,
                success: true,  // Added success property
                user
            });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};



export const logout = async(req,res) => {
    try {
        
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            message: "logged out successfully!"
        })

    }

    catch (error) {
        console.log(error);
    }
}