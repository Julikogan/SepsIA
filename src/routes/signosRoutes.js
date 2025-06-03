import express from 'express'
import { registrarSignosVitales } from '../controllers/signosController.js'

const express = require('express');
const router = express.Router();
const prisma = require('../models/prisma');
router.post('/', registrarSignosVitales)

export default router
