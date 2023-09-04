import { DataSource } from 'typeorm';
import UsuarioSchema from '../entity/UsuarioSchema.js';
import VeterinarioSchema from '../entity/VeterinarioSchema.js';

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
