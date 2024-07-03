import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies.token; 
        console.log(token);

        if (!token) {
            return res.status(401).json({ message: "User not authenticated" });
        }

        const decoded = jwt.verify(token, 'your_secret_key');

        if (!decoded) {
            return res.status(401).json({ message: "Invalid token" });
        }
        
        req.id = decoded.userId;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default isAuthenticated;
