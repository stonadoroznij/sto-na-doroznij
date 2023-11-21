/*
  Warnings:

  - You are about to drop the column `carMake` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the column `services` on the `Request` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Request" DROP COLUMN "carMake",
DROP COLUMN "services",
ADD COLUMN     "carBrand" TEXT;

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RequestToService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RequestToService_AB_unique" ON "_RequestToService"("A", "B");

-- CreateIndex
CREATE INDEX "_RequestToService_B_index" ON "_RequestToService"("B");

-- AddForeignKey
ALTER TABLE "_RequestToService" ADD CONSTRAINT "_RequestToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Request"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RequestToService" ADD CONSTRAINT "_RequestToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
