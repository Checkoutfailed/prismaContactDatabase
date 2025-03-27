/*
  Warnings:

  - A unique constraint covering the columns `[local_id]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Contact_local_id_key" ON "Contact"("local_id");
