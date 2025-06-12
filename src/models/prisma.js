// Load environment variables
import dotenv from 'dotenv';
dotenv.config();
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default prisma; 
  
// Main function to test database connection and queries
async function main() {
    try {
        const allUsers = await prisma.user.findMany();
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
