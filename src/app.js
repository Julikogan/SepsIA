import express from 'express';
import cors from 'cors';

import signosRoutes from './routes/signosRoutes.js';
import resultadosRoutes from './routes/resultadosRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/signos-vitales', signosRoutes);
app.use('/api', resultadosRoutes);

// Exportar app como función para Vercel
export default app;
