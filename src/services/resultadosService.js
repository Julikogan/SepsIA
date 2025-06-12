import prisma from '../models/prisma.js';

export const obtenerResultadoPorSignoVital = async (idSignoVital) => {
  return await prisma.resultado.findUnique({
    where: {
      id_signo_vital: Number(idSignoVital)
    }
  });
};
