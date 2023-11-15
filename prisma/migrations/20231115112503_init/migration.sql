-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT,
    "carMake" TEXT,
    "carModel" TEXT,
    "carYear" INTEGER,
    "vinCode" TEXT,
    "message" TEXT,
    "services" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);
