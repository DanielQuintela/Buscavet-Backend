import express from 'express';
import routes from './routes/index.js';

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

routes(app);

export default app;
