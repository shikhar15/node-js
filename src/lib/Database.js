import mongoose from 'mongoose';
import configurations from './config.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(configurations.mongoUrl, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("MongoDB connected successfully");
        return true;
    } catch (err) {
        console.error('Error connecting to the database:', err);
        return false;
    }
};