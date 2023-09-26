import { DataSource } from 'typeorm';
import AnimalEstimacaoSchema from '../entity/AnimalEstimacaoSchema.js';
import AvaliacaoSchema from '../entity/AvaliacaoSchema.js';
import ClienteSchema from '../entity/ClienteSchema.js';
import ConsultaSchema from '../entity/ConsultaSchema.js';
import DoseVacinaAnimalSchema from '../entity/DoseVacinaAnimalSchema.js';
import EspecializacaoSchema from '../entity/EspecializacaoSchema.js';
import EstabelecimentoSchema from '../entity/EstabelecimentoSchema.js';
import ProdutoEstabelecimentoSchema from '../entity/ProdutoEstabelecimentoSchema.js';
import ProdutoSchema from '../entity/ProdutoSchema.js';
import ServicoEstabelecimentoSchema from '../entity/ServicoEstabelecimentoSchema.js';
import ServicoSchema from '../entity/ServicoSchema.js';
import ServicoVeterinarioSchema from '../entity/ServicoVeterinarioSchema.js';
import UsuarioEstabelecimentoSchema from '../entity/UsuarioEstabelecimentoSchema.js';
import UsuarioSchema from '../entity/UsuarioSchema.js';
import VacinaSchema from '../entity/VacinaSchema.js';
import VeterinarioEstabelecimentoSchema from '../entity/VeterinarioEstabelecimentoSchema.js';
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
