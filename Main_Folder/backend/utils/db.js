import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://hritikoff:icqAPh2oD6DgzsSP@cluster0.04rmqxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('mongodb connected 🌿');
    } catch (error) {
        console.error(`MongoDB Error: ${error.message}`);
    }
}
export default connectDB;