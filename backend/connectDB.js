
import mongoose from "mongoose";
const uri = "mongodb+srv://hasanijthedi2002:KeFagEENCTjcwwBN@cluster0.h3kwcnw.mongodb.net/";


const connectDB = async () => {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(error) {
    // Ensures that the client will close when you finish/error
    console.log(error);
  }
}
export default connectDB;