import jwt from "jsonwebtoken";


const isAuthenticated = async (req,res,token) => {
    try{

        const token = req.cookies.token; 
        console.log(token);


        if (!token) {
            return res.status(401).json({message:"User not authenticated"})
        }

        const decode = await jwt.verify(token, 'your_secret_key');

        if (!decode) {
            return res.status(401).json({message:"Invalid token"})
        }
        req.id = decode.userId;
        next();

    }

    catch(error) {
        console.log(error);
    }
}

export default isAuthenticated;