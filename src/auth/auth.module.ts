import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UsersService } from "users/users.service";
import { PrismaService } from "prisma/prisma.service";

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: "hello",
        signOptions: { expiresIn: "60m" },
      }),
    }),
  ],
  providers: [AuthService, JwtService, UsersService, PrismaService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
