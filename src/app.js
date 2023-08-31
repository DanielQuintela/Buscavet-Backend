import express from 'express';
import routes from './routes/index';
import db from './config/dbConfig';

/* eslint-disable-next-line */
db.on('error', console.error.bind(console, 'Erro de conexão com o banco de dados:'));
db.once('open', () => {
/* eslint-disable-next-line */
  console.log('Conexão com o banco de dados estabelecida com sucesso.');
});

const app = express();
app.use(express.json());

routes(app);

export default app;
