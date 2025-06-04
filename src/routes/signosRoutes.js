import express from 'express'
import { registrarSignosVitales } from '../controllers/signosController.js'

const router = express.Router();

router.post('/', registrarSignosVitales)

export default router