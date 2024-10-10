import dotenv from 'dotenv';

const result = dotenv.config({ path: '../.env' });

export const configurations = Object.freeze({
    secretKey: process.env.SECRET,
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL
});

export default configurations;