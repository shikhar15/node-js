import express from 'express';
import { sendResponse } from '../src/lib/genricResponse.js';
import { User } from './modal/user.js';
import { connectDB } from './lib/Database.js'
import routes from './routes/index.js'

const app = express();

const startServer = async () => {
    const dbConnection = await connectDB();
    
    if (dbConnection) {
        app.use(express.json()); // Middleware to parse JSON requests
        app.use(express.urlencoded({ extended: true }));

        // Health check endpoint
        app.get('/health-check', (req, res) => {
            res.send('Running Fine !!');
        });

        app.use('/api', routes);

        // Route to list all collections in the database
        app.get('/collections', async (req, res) => {
            try {
                const collections = await mongoose.connection.db.listCollections().toArray();
                const collectionNames = collections.map(collection => collection.name);
                sendResponse(res, 200, collectionNames);
            } catch (error) {
                console.error('Error retrieving collections:', error);
                sendResponse(res, 500, { message: 'Error retrieving collections' });
            }
        });

        // Start the server
        app.listen(4000, () => {
            console.log("App running on port 4000");
        });
    }
};

// Start the server after connecting to the database
startServer();
