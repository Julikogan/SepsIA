import express from 'express';
import { getResultadoPorSignoVital } from '../controllers/resultadosController.js';

const router = express.Router();

router.get('/resultados/:id', getResultadoPorSignoVital);

export default router;
