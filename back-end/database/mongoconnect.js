import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.MONGO_URL;

const connectDB = async () => {

    try {
        await mongoose.connect(connectionString);
        console.log('DB connected');
    } catch (error) {
        console.log('error while connecting to DB' , error);
    }
}

export default connectDB;