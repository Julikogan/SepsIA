import prisma from '../models/prisma.cjs';

export const obtenerResultadoPorSignoVital = async (idSignoVital) => {
  return await prisma.resultado.findUnique({
    where: {
      idSignosVitales: Number(idSignoVital)
    }
  });
};
