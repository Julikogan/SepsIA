-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SignosVitales" (
    "id" SERIAL NOT NULL,
    "presion" DOUBLE PRECISION NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SignosVitales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resultado" (
    "id" SERIAL NOT NULL,
    "resultado" DOUBLE PRECISION NOT NULL,
    "id_signo_vital" INTEGER NOT NULL,

    CONSTRAINT "Resultado_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Resultado" ADD CONSTRAINT "Resultado_id_signo_vital_fkey" FOREIGN KEY ("id_signo_vital") REFERENCES "SignosVitales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
