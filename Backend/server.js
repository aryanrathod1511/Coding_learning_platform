// server.js
import 'dotenv/config';
import app from './app.js';
import connectDb from './config/connectDB.js';
import { verifyEmailTransporter } from './config/mailer.js';
import axios from 'axios'
const port = process.env.PORT || 4000;

const startServer = async () => {
    try {
        await connectDb();
        await verifyEmailTransporter();
        app.listen(port, '0.0.0.0', () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
};

startServer();
