import { DataSource } from 'typeorm';
import { UsuarioSchema, VeterinarioSchema } from '../entity/index.js';

const db = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: 'db',
  synchronize: true,
  logging: true,
  entities: [UsuarioSchema, VeterinarioSchema],
  subscribers: [],
  migrations: [],
});

export default db;
