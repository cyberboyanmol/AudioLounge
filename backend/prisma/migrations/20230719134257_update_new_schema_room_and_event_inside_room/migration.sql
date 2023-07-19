-- CreateEnum
CREATE TYPE "RoomType" AS ENUM ('SOCIAL', 'PUBLIC', 'PRIVATE');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('PUBLIC', 'PRIVATE');

-- CreateEnum
CREATE TYPE "eventCategory" AS ENUM ('AUDIO', 'VIDEOANDAUDIO');

-- CreateEnum
CREATE TYPE "Provider" AS ENUM ('LOCAL', 'GOOGLE');

-- CreateEnum
CREATE TYPE "UserRoleInEventRoom" AS ENUM ('ADMIN', 'MODERATOR', 'MEMBERS');

-- CreateEnum
CREATE TYPE "AttendeeRoleInEvent" AS ENUM ('LISTENER', 'SPEAKERANDLISTENER');

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "avatar" TEXT,
    "google_id" TEXT,
    "activated" BOOLEAN NOT NULL DEFAULT false,
    "provider" "Provider" NOT NULL DEFAULT 'LOCAL',
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Room" (
    "roomId" TEXT NOT NULL,
    "roomname" TEXT NOT NULL,
    "roomBanner" TEXT NOT NULL,
    "description" TEXT,
    "roomType" "RoomType" NOT NULL DEFAULT 'PUBLIC',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "creatorId" TEXT,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("roomId")
);

-- CreateTable
CREATE TABLE "Event" (
    "eventId" TEXT NOT NULL,
    "discussiontopic" TEXT NOT NULL,
    "description" TEXT,
    "start_timing" TIMESTAMP(3) NOT NULL,
    "EventroomId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "endTiming" TIMESTAMP(3),
    "tags" TEXT[],
    "eventType" "EventType" NOT NULL DEFAULT 'PUBLIC',
    "eventcategory" "eventCategory" NOT NULL,
    "attendeesCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("eventId")
);

-- CreateTable
CREATE TABLE "SpeakerInEvent" (
    "speakerId" TEXT NOT NULL,
    "eventroomId" TEXT NOT NULL,

    CONSTRAINT "SpeakerInEvent_pkey" PRIMARY KEY ("speakerId","eventroomId")
);

-- CreateTable
CREATE TABLE "UserInRoom" (
    "userId" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "roles" "UserRoleInEventRoom" NOT NULL,

    CONSTRAINT "UserInRoom_pkey" PRIMARY KEY ("userId","roomId")
);

-- CreateTable
CREATE TABLE "AttendeeInEvent" (
    "socketId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isHost" BOOLEAN NOT NULL,
    "eventId" TEXT NOT NULL,
    "roles" "AttendeeRoleInEvent" NOT NULL,

    CONSTRAINT "AttendeeInEvent_pkey" PRIMARY KEY ("userId","eventId")
);

-- CreateTable
CREATE TABLE "Refresh" (
    "refreshId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "refreshtoken" TEXT NOT NULL,

    CONSTRAINT "Refresh_pkey" PRIMARY KEY ("refreshId")
);

-- CreateTable
CREATE TABLE "recordingSchema" (
    "userId" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "recordingId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "recordingTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recordingSchema_pkey" PRIMARY KEY ("recordingId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Room_roomId_key" ON "Room"("roomId");

-- CreateIndex
CREATE UNIQUE INDEX "Event_eventId_key" ON "Event"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "Event_EventroomId_key" ON "Event"("EventroomId");

-- CreateIndex
CREATE UNIQUE INDEX "AttendeeInEvent_userId_key" ON "AttendeeInEvent"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Refresh_refreshId_key" ON "Refresh"("refreshId");

-- CreateIndex
CREATE UNIQUE INDEX "Refresh_refreshtoken_key" ON "Refresh"("refreshtoken");

-- CreateIndex
CREATE INDEX "Refresh_userId_idx" ON "Refresh"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "recordingSchema_recordingId_key" ON "recordingSchema"("recordingId");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_EventroomId_fkey" FOREIGN KEY ("EventroomId") REFERENCES "Room"("roomId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpeakerInEvent" ADD CONSTRAINT "SpeakerInEvent_speakerId_fkey" FOREIGN KEY ("speakerId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpeakerInEvent" ADD CONSTRAINT "SpeakerInEvent_eventroomId_fkey" FOREIGN KEY ("eventroomId") REFERENCES "Event"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInRoom" ADD CONSTRAINT "UserInRoom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInRoom" ADD CONSTRAINT "UserInRoom_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("roomId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendeeInEvent" ADD CONSTRAINT "AttendeeInEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendeeInEvent" ADD CONSTRAINT "AttendeeInEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Refresh" ADD CONSTRAINT "Refresh_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recordingSchema" ADD CONSTRAINT "recordingSchema_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recordingSchema" ADD CONSTRAINT "recordingSchema_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Event"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;
