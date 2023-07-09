-- DropForeignKey
ALTER TABLE "Refresh" DROP CONSTRAINT "Refresh_userId_fkey";

-- AddForeignKey
ALTER TABLE "Refresh" ADD CONSTRAINT "Refresh_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
