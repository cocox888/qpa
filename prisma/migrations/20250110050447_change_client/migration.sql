/*
  Warnings:

  - Added the required column `password` to the `client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "client" ADD COLUMN     "password" TEXT NOT NULL;
