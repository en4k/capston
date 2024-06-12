import { Module } from "@nestjs/common";
import { SittersService } from "./sitters.service";
import { SittersController } from "./sitters.controller";
import { PrismaService } from "prisma/prisma.service";

@Module({
  providers: [SittersService, PrismaService],
  controllers: [SittersController],
})
export class SittersModule {}
