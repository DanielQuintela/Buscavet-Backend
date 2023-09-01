import { DataSource } from 'typeorm';
import UsuarioSchema from '../entity/UsuarioSchema.js';
import VeterinarioSchema from '../entity/VeterinarioSchema.js';

const db = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  database: 'db',
  synchronize: true,
  logging: true,
  entities: [UsuarioSchema, VeterinarioSchema],
  subscribers: [],
  migrations: [],
});

export default db;
