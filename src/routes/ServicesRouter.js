import express from 'express';
import SearchCep from '../Services/SearchCep';

const router = express.Router();

router
    .post('/services/getcep', SearchCep.searchCep)