/*
  Warnings:

  - You are about to drop the column `email_address` on the `client` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `client` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `client` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "client_email_address_key";

-- AlterTable
ALTER TABLE "client" DROP COLUMN "email_address",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "client_email_key" ON "client"("email");
