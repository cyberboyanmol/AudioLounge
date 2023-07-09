/*
  Warnings:

  - You are about to drop the column `created_At` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_At` on the `User` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "created_At",
DROP COLUMN "refresh_token",
DROP COLUMN "updated_At",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "google_id" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Refresh" (
    "refreshId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "refreshtoken" TEXT NOT NULL,

    CONSTRAINT "Refresh_pkey" PRIMARY KEY ("refreshId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Refresh_refreshId_key" ON "Refresh"("refreshId");

-- CreateIndex
CREATE UNIQUE INDEX "Refresh_refreshtoken_key" ON "Refresh"("refreshtoken");

-- AddForeignKey
ALTER TABLE "Refresh" ADD CONSTRAINT "Refresh_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
