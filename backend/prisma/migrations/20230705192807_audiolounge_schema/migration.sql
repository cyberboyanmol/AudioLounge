-- CreateEnum
CREATE TYPE "RoomType" AS ENUM ('SOCIAL', 'PUBLIC', 'PRIVATE');

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "refresh_token" TEXT NOT NULL,
    "activated" BOOLEAN NOT NULL DEFAULT false,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "EventRoom" (
    "eventId" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "description" TEXT,
    "roomType" "RoomType" NOT NULL DEFAULT 'SOCIAL',
    "start_timing" TIMESTAMP(3) NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_At" TIMESTAMP(3) NOT NULL,
    "creatorId" TEXT,

    CONSTRAINT "EventRoom_pkey" PRIMARY KEY ("eventId")
);

-- CreateTable
CREATE TABLE "SpeakerInRoom" (
    "speakerId" TEXT NOT NULL,
    "eventroomId" TEXT NOT NULL,

    CONSTRAINT "SpeakerInRoom_pkey" PRIMARY KEY ("speakerId","eventroomId")
);

-- CreateTable
CREATE TABLE "_UserInRoom" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "EventRoom_eventId_key" ON "EventRoom"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "_UserInRoom_AB_unique" ON "_UserInRoom"("A", "B");

-- CreateIndex
CREATE INDEX "_UserInRoom_B_index" ON "_UserInRoom"("B");

-- AddForeignKey
ALTER TABLE "EventRoom" ADD CONSTRAINT "EventRoom_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpeakerInRoom" ADD CONSTRAINT "SpeakerInRoom_speakerId_fkey" FOREIGN KEY ("speakerId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpeakerInRoom" ADD CONSTRAINT "SpeakerInRoom_eventroomId_fkey" FOREIGN KEY ("eventroomId") REFERENCES "EventRoom"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserInRoom" ADD CONSTRAINT "_UserInRoom_A_fkey" FOREIGN KEY ("A") REFERENCES "EventRoom"("eventId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserInRoom" ADD CONSTRAINT "_UserInRoom_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
