import express from 'express'
import cors from 'cors'
import signosRoutes from './routes/signosRoutes.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/signos-vitales', signosRoutes)