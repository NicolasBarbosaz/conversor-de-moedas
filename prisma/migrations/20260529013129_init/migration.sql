-- CreateTable
CREATE TABLE "Conversor" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "fromCurrency" TEXT NOT NULL,
    "usdValue" DOUBLE PRECISION NOT NULL,
    "eurValue" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Conversor_pkey" PRIMARY KEY ("id")
);
