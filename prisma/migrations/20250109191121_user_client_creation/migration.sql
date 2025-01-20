/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'manager', 'member', 'client');

-- CreateEnum
CREATE TYPE "PreferedContactMethod" AS ENUM ('email', 'phone', 'app');

-- CreateEnum
CREATE TYPE "FileShareMethod" AS ENUM ('googleDrive', 'dropBox', 'oneDrive', 'other');

-- CreateEnum
CREATE TYPE "Often" AS ENUM ('daily', 'weekly', 'other');

-- CreateEnum
CREATE TYPE "ReceiveUpdates" AS ENUM ('email', 'videoCall', 'app', 'pmTool');

-- CreateEnum
CREATE TYPE "BillingMethod" AS ENUM ('creditCard', 'bankTransfer');

-- CreateEnum
CREATE TYPE "BillingCycle" AS ENUM ('weekly', 'monthly');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'admin',
    "avatar" TEXT,
    "dob" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "business_name" TEXT,
    "personal_address" TEXT NOT NULL,
    "business_address" TEXT,
    "position" TEXT NOT NULL,
    "email_address" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "preferred_contact_method" "PreferedContactMethod" DEFAULT 'email',
    "timezone" TEXT NOT NULL,
    "default_services" TEXT[],
    "other_services" TEXT[],
    "priorities" TEXT,
    "support_hours" INTEGER,
    "use_tools" TEXT,
    "access_specific" BOOLEAN,
    "file_share_method" "FileShareMethod" DEFAULT 'googleDrive',
    "other_tools" TEXT,
    "often" "Often" DEFAULT 'daily',
    "receive_updates" "ReceiveUpdates" DEFAULT 'email',
    "key_people" TEXT[],
    "particular_task" TEXT,
    "start_date" TIMESTAMP(3),
    "billing_method" "BillingMethod" DEFAULT 'creditCard',
    "billing_cycle" "BillingCycle" DEFAULT 'weekly',
    "invoice_email" TEXT,
    "emergency_contact_name" TEXT,
    "emergency_contact_phone" TEXT,
    "emergency_relationship" TEXT,
    "digital_sign" TEXT NOT NULL,
    "sign_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "client_email_address_key" ON "client"("email_address");
