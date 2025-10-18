import express from 'express';
import cors from 'cors';
import router from './routes';
import { customLogger } from './utils/customLogger';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(3000, () => {
    customLogger.info('[SERVER] - Server is running on port 3000');
})
