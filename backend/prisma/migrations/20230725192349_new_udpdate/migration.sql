/*
  Warnings:

  - The values [VIDEOANDAUDIO] on the enum `eventCategory` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `AttendeeInEvent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `EventroomId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `discussiontopic` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `endTiming` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `roomId` on the `recordingSchema` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[attendeeId]` on the table `AttendeeInEvent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[eventId]` on the table `AttendeeInEvent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[creatorId]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - The required column `attendeeId` was added to the `AttendeeInEvent` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `creatorId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventbanner` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventroomId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomLogo` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `roles` on the `UserInRoom` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `name` to the `recordingSchema` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRoleInRoom" AS ENUM ('ADMIN', 'MODERATOR', 'MEMBERS');

-- AlterEnum
BEGIN;
CREATE TYPE "eventCategory_new" AS ENUM ('AUDIO', 'STREAMING');
ALTER TABLE "Event" ALTER COLUMN "eventcategory" TYPE "eventCategory_new" USING ("eventcategory"::text::"eventCategory_new");
ALTER TYPE "eventCategory" RENAME TO "eventCategory_old";
ALTER TYPE "eventCategory_new" RENAME TO "eventCategory";
DROP TYPE "eventCategory_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "AttendeeInEvent" DROP CONSTRAINT "AttendeeInEvent_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_EventroomId_fkey";

-- DropForeignKey
ALTER TABLE "recordingSchema" DROP CONSTRAINT "recordingSchema_roomId_fkey";

-- DropIndex
DROP INDEX "Event_EventroomId_key";

-- AlterTable
ALTER TABLE "AttendeeInEvent" DROP CONSTRAINT "AttendeeInEvent_pkey",
ADD COLUMN     "attendeeId" TEXT NOT NULL,
ADD COLUMN     "hangoutId" TEXT,
ALTER COLUMN "eventId" DROP NOT NULL,
ADD CONSTRAINT "AttendeeInEvent_pkey" PRIMARY KEY ("attendeeId");

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "EventroomId",
DROP COLUMN "discussiontopic",
DROP COLUMN "endTiming",
ADD COLUMN     "creatorId" TEXT NOT NULL,
ADD COLUMN     "end_timing" TIMESTAMP(3),
ADD COLUMN     "eventbanner" TEXT NOT NULL,
ADD COLUMN     "eventroomId" TEXT NOT NULL,
ADD COLUMN     "isEnded" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isStarted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "topic" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "roomLogo" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "UserInRoom" DROP COLUMN "roles",
ADD COLUMN     "roles" "UserRoleInRoom" NOT NULL;

-- AlterTable
ALTER TABLE "recordingSchema" DROP COLUMN "roomId",
ADD COLUMN     "eventId" TEXT,
ADD COLUMN     "hangoutId" TEXT,
ADD COLUMN     "name" TEXT NOT NULL;

-- DropEnum
DROP TYPE "UserRoleInEventRoom";

-- CreateTable
CREATE TABLE "Hangout" (
    "hangoutId" TEXT NOT NULL,

    CONSTRAINT "Hangout_pkey" PRIMARY KEY ("hangoutId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hangout_hangoutId_key" ON "Hangout"("hangoutId");

-- CreateIndex
CREATE UNIQUE INDEX "AttendeeInEvent_attendeeId_key" ON "AttendeeInEvent"("attendeeId");

-- CreateIndex
CREATE UNIQUE INDEX "AttendeeInEvent_eventId_key" ON "AttendeeInEvent"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "Event_creatorId_key" ON "Event"("creatorId");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_eventroomId_fkey" FOREIGN KEY ("eventroomId") REFERENCES "Room"("roomId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendeeInEvent" ADD CONSTRAINT "AttendeeInEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("eventId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendeeInEvent" ADD CONSTRAINT "AttendeeInEvent_hangoutId_fkey" FOREIGN KEY ("hangoutId") REFERENCES "Hangout"("hangoutId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recordingSchema" ADD CONSTRAINT "recordingSchema_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("eventId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recordingSchema" ADD CONSTRAINT "recordingSchema_hangoutId_fkey" FOREIGN KEY ("hangoutId") REFERENCES "Hangout"("hangoutId") ON DELETE SET NULL ON UPDATE CASCADE;
