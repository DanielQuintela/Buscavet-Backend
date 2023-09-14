import express from 'express';
import SearchCep from '../Services/SearchCep.js';

const router = express.Router();

router
  .post('/services/getcep', SearchCep.searchCep);

export default router;
