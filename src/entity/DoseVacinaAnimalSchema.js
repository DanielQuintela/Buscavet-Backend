import { EntitySchema } from 'typeorm';
import DoseVacinaAnimalModel from '../models/DoseVacinaAnimalModel.js';

export default new EntitySchema({
  name: 'DoseVacinaAnimalModel',
  tableName: 'DOSES_VACINA_ANIMAL',
  target: DoseVacinaAnimalModel,
  columns: {
    idVeterinario: {
      primary: true,
      type: 'int',
    },
    idAnimal: {
      primary: true,
      type: 'int',
    },
    idVacina: {
      primary: true,
      type: 'int',
    },
    data: {
      type: 'date',
    },
    dataRevacinar: {
      type: 'date',
    },
  },
  relations: {
    veterinario: {
      type: 'many-to-one',
      target: 'VeterinarioModel',
      joinColumn: {
        name: 'idVeterinario',
      },
    },
    animal: {
      type: 'many-to-one',
      target: 'AnimalEstimacaoModel',
      joinColumn: {
        name: 'idAnimal',
      },
    },
    vacina: {
      type: 'many-to-one',
      target: 'VacinaModel',
      joinColumn: {
        name: 'idVacina',
      },
    },
  },
});
