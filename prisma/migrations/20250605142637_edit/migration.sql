/*
  Warnings:

  - You are about to drop the column `id_paciente` on the `Resultado` table. All the data in the column will be lost.
  - You are about to drop the column `id_paciente` on the `SignosVitales` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Resultado" DROP COLUMN "id_paciente";

-- AlterTable
ALTER TABLE "SignosVitales" DROP COLUMN "id_paciente",
ALTER COLUMN "horario" SET DEFAULT CURRENT_TIMESTAMP;
