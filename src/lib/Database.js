import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/node_db', {
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