// src/users/users.controller.ts

import { Controller, Post, Body, Res, HttpStatus } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { Response } from "express";
import { SittersService } from "./sitters.service";

@Controller("sitters")
export class SittersController {
  constructor(private sitterService: SittersService) {}

  @Post("register")
  async register(
    @Body()
    body: {
      userId: number;
      certification: string;
      experience: number;
    },
    @Res() res: Response
  ) {
    try {
      await this.sitterService.create(
        body.userId,
        body.certification,
        body.experience
      );
      return res
        .status(HttpStatus.CREATED)
        .json({ message: "회원가입에 성공했습니다." });
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "회원가입에 실패했습니다." });
    }
  }
}
