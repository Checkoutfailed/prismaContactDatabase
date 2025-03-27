/*
  Warnings:

  - You are about to drop the column `edited_at_timestamp` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `last_synced_at` on the `Contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "edited_at_timestamp",
DROP COLUMN "last_synced_at";
