/*
  Warnings:

  - You are about to drop the `Staff` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_staffId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isStaff" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Staff";
