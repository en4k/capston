// src/app.module.ts
import { Module } from "@nestjs/common";
import { AuthController } from "./auth/auth.controller";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { SittersModule } from "./sitters/sitters.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    UsersModule,
    SittersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AuthController, AppController],
  providers: [AppService],
})
export class AppModule {}
