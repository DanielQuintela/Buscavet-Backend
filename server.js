import 'dotenv/config';
import app from './src/app';

const port = process.env.PORT || 4000;

app.listen(port);
