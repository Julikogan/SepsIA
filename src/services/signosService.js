import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const crearSignoVital = async (datos) => {
  return await prisma.signosVitales.create({ data: datos })
}

export const guardarResultadoIA = async (datos) => {
  return await prisma.resultado.create({ data: datos })
}