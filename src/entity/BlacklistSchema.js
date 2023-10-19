import { EntitySchema } from 'typeorm';
import BlacklistModel from '../models/BlacklistModel.js';

export default new EntitySchema({
  name: 'BlacklistModel',
  tableName: 'BLACKLIST',
  target: BlacklistModel,
  columns: {
    idBlackList: {
      primary: true, type: 'int', generated: true,
    },
    token: {
      type: 'text',
      nullable: false,
      unique: true,
    },
    reason: {
      type: 'text',
      nullable: false,
    },
    expirationDate: {
      type: 'timestamp',
      nullable: true,
    },
  },
});
