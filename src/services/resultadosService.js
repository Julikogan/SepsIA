import { PrismaClient } from '../../prisma/client.js';
const prisma = new PrismaClient();

export const obtenerResultadoPorSignoVital = async (idSignoVital) => {
  return await prisma.resultado.findFirst({
    where: {
      id_signo_vital: Number(idSignoVital)
    }
  });
};
