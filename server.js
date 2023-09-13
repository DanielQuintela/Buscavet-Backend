import 'dotenv/config';
import app from './src/app.js';
import db from './src/config/dbConfig.js';

const port = process.env.PORT || 4000;

await db.initialize();

app.listen(port);
