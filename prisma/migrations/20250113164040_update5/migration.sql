/*
  Warnings:

  - The values [m6,m12] on the enum `Duration` will be removed. If these variants are still used in the database, this will fail.
  - The `monthly_hours` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `rate` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Duration_new" AS ENUM ('w2', 'm1', 'm2', 'm3');
ALTER TABLE "Project" ALTER COLUMN "duration" DROP DEFAULT;
ALTER TABLE "Project" ALTER COLUMN "duration" TYPE "Duration_new" USING ("duration"::text::"Duration_new");
ALTER TYPE "Duration" RENAME TO "Duration_old";
ALTER TYPE "Duration_new" RENAME TO "Duration";
DROP TYPE "Duration_old";
ALTER TABLE "Project" ALTER COLUMN "duration" SET DEFAULT 'm3';
COMMIT;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "monthly_hours",
ADD COLUMN     "monthly_hours" INTEGER,
DROP COLUMN "rate",
ADD COLUMN     "rate" INTEGER,
ALTER COLUMN "duration" DROP NOT NULL,
ALTER COLUMN "package_level" DROP NOT NULL,
ALTER COLUMN "project_type" DROP NOT NULL;
