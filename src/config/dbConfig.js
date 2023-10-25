import { DataSource } from 'typeorm';
import {
  UsuarioSchema, VeterinarioSchema, EspecializacaoSchema, EstabelecimentoSchema, ServicoSchema, VacinaSchema, ProdutoSchema, ClienteSchema, AnimalEstimacaoSchema, ConsultaSchema, AvaliacaoSchema, DoseVacinaAnimalSchema, ProdutoEstabelecimentoSchema, ServicoEstabelecimentoSchema, ServicoVeterinarioSchema, UsuarioEstabelecimentoSchema, VeterinarioEstabelecimentoSchema,
} from '../entity/index.js';

const db = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: 'db',
  synchronize: true,
  logging: true,
  entities: [
    AnimalEstimacaoSchema,
    AvaliacaoSchema,
    ClienteSchema,
    ConsultaSchema,
    DoseVacinaAnimalSchema,
    EspecializacaoSchema,
    EstabelecimentoSchema,
    ProdutoEstabelecimentoSchema,
    ProdutoSchema,
    ServicoEstabelecimentoSchema,
    ServicoSchema,
    ServicoVeterinarioSchema,
    UsuarioEstabelecimentoSchema,
    UsuarioSchema,
    VacinaSchema,
    VeterinarioEstabelecimentoSchema,
    VeterinarioSchema,
  ],
  subscribers: [],
  migrations: [],
});

export default db;
