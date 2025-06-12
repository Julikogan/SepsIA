import express from 'express';
import cors from 'cors';
import signosRoutes from './routes/signosRoutes.js';
import resultadosRoutes from './routes/resultadosRoutes.js';
import { PrismaClient } from '@prisma/client';

import dotenv from 'dotenv';
dotenv.config();
  
// Instantiate PrismaClient
const prisma = new PrismaClient();

// Function to connect and disconnect Prisma
async function main() {
    try {
        await prisma.$connect();
        console.log("Database connected successfully.");
    } catch (e) {
        console.error(e);
    }
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Deffinir rutas
app.use('/signos-vitales', signosRoutes);
app.use('/api', resultadosRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('API de Signos Vitales y Resultados');
});

const startServer = async () => {
    await main();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();

// export default app;

