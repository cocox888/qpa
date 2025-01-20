/*
  Warnings:

  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('online', 'away', 'offline');

-- CreateEnum
CREATE TYPE "PackageType" AS ENUM ('va', 'smm', 'obm', 'wds');

-- CreateEnum
CREATE TYPE "Duration" AS ENUM ('m3', 'm6', 'm12');

-- CreateEnum
CREATE TYPE "PackageLevel" AS ENUM ('basic', 'standard', 'premium');

-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('website', 'redesign', 'maintenance', 'ecommerce');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('low', 'medium', 'high');

-- CreateEnum
CREATE TYPE "TaskState" AS ENUM ('todo', 'progress', 'review', 'done');

-- DropTable
DROP TABLE "client";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "User" (
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
    "status" "Status" NOT NULL DEFAULT 'online',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "business_name" TEXT,
    "personal_address" TEXT NOT NULL,
    "business_address" TEXT,
    "position" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "preferred_contact_method" "PreferedContactMethod" DEFAULT 'email',
    "timezone" TEXT NOT NULL,
    "default_services" TEXT[],
    "other_services" TEXT[],
    "priorities" TEXT,
    "support_hours" INTEGER,
    "use_tools" TEXT[],
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

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "project_name" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,
    "package_type" "PackageType" NOT NULL DEFAULT 'va',
    "monthly_hours" TEXT NOT NULL,
    "rate" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "rollover" BOOLEAN,
    "platforms" TEXT[],
    "duration" "Duration" NOT NULL DEFAULT 'm3',
    "package_level" "PackageLevel" NOT NULL DEFAULT 'basic',
    "services" TEXT[],
    "project_type" "ProjectType" NOT NULL DEFAULT 'website',
    "technology" TEXT[],
    "additional_setting" TEXT[],
    "portal_access" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "task_name" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL,
    "priority" "Priority" NOT NULL DEFAULT 'low',
    "description" TEXT,
    "estimated_time" BIGINT,
    "state" "TaskState" NOT NULL DEFAULT 'todo',

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeTracker" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "message" TEXT,

    CONSTRAINT "TimeTracker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjectToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_TaskToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_TaskToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE INDEX "_ProjectToUser_B_index" ON "_ProjectToUser"("B");

-- CreateIndex
CREATE INDEX "_TaskToUser_B_index" ON "_TaskToUser"("B");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeTracker" ADD CONSTRAINT "TimeTracker_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToUser" ADD CONSTRAINT "_ProjectToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToUser" ADD CONSTRAINT "_ProjectToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TaskToUser" ADD CONSTRAINT "_TaskToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TaskToUser" ADD CONSTRAINT "_TaskToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
