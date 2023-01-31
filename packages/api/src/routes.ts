import express from 'express';
import { all, one, save } from './controllers/ItemController';


const router = express.Router();

router
    .route('/')
    .post(save)
    .get(all);

router
    .route('/:id')
    .get(one);

export default router;
