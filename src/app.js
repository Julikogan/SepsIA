// Importing necessary libraries and modules
import express from 'express';
import cors from 'cors';
import signosRoutes from './routes/signosRoutes.js';
import resultadosRoutes from './routes/resultadosRoutes.js';
import { PrismaClient } from '@prisma/client'; // Changed to import

// Instantiate PrismaClient
const prisma = new PrismaClient();

// Function to connect and disconnect Prisma
async function main() {
    try {
        await prisma.$connect(); // connect to database
        console.log("Database connected successfully.");
    } catch (e) {
        console.error(e);
    }
}

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Defining routes
app.use('/signos-vitales', signosRoutes);
app.use('/api', resultadosRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.send('API de Signos Vitales y Resultados');
});

// Start the server and connect to the database
const startServer = async () => {
    await main();
    const PORT = process.env.PORT || 3000; // use environment port or default to 3000
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();

// Exporting the app for testing or further use
export default app;

