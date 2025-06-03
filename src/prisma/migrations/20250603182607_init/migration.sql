-- CreateTable
CREATE TABLE "SignosVitales" (
    "id" SERIAL NOT NULL,
    "presion" DOUBLE PRECISION NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "id_paciente" INTEGER NOT NULL,

    CONSTRAINT "SignosVitales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resultado" (
    "id" SERIAL NOT NULL,
    "id_signo_vital" INTEGER NOT NULL,
    "id_paciente" INTEGER NOT NULL,
    "resultado" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Resultado_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Resultado" ADD CONSTRAINT "Resultado_id_signo_vital_fkey" FOREIGN KEY ("id_signo_vital") REFERENCES "SignosVitales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
