import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.BD;

const initializeDB = async () => {
    try {
        await connect(URI);
        console.log("Database connection successfully established");
    } catch (err) {
        console.log("Error while connecting to database:", err);
    }
};

export default initializeDB;
