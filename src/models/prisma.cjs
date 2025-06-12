// Load environment variables
require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

// Instantiate PrismaClient with datasource
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL
        }
    }
});

const prismaClient = new PrismaClient();
export default prismaClient; 
  
// Main function to test database connection and queries
async function main() {
    try {
        const allUsers = await prisma.user.findMany(); // Adjust this query based on your actual model
        console.log(allUsers);
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect(); // Disconnect after finishing operations
    }
}

// Run the main function
main();
