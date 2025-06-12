import prisma from '../models/prisma.js';

export const obtenerResultadoPorSignoVital = async (idSignoVital) => {
  return await prisma.resultado.findUnique({
    where: {
      idSignosVitales: Number(idSignoVital)
    }
  });
};
