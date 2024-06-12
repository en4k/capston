import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { PrismaService } from "prisma/prisma.service";
import { AuthService } from "auth/auth.service";
import { AuthModule } from "auth/auth.module";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [],
  providers: [UsersService, PrismaService, AuthService, JwtService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
