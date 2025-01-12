/*
  Warnings:

  - Changed the type of `category` on the `Events` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('MUSIC', 'SPORTS', 'COMEDY', 'FOOD_AND_DRINK', 'CONFERENCE', 'NETWORKING', 'ART', 'EDUCATION', 'FILM', 'HEALTH_AND_WELLNESS', 'FUNDRAISER', 'GAMING', 'OUTDOOR_ADVENTURE', 'CULTURE', 'BUSINESS', 'TECH', 'OTHER');

-- AlterTable
ALTER TABLE "Events" DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "avatar_image" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Staff" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "bio" TEXT,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar_img_url" TEXT,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Staff_email_key" ON "Staff"("email");

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
