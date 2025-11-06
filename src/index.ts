import express from 'express';
import { connectMongoNative } from './services/database.services';
import dotenv from 'dotenv'

dotenv.config();
const app = express();

// Kết nối MongoDB (ALSS)
connectMongoNative();
const router = express.Router();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send(`Hello world!`)
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})