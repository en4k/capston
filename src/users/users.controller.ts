// src/users/users.controller.ts

import { Controller, Post, Body, Res, HttpStatus } from "@nestjs/common";
import { Response } from "express";
import { UsersService } from "./users.service";
import { CreateUserArgs } from "./dto/create-user.args";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post("register")
  async register(
    @Body()
    body: CreateUserArgs,
    @Res() res: Response
  ) {
    try {
      await this.userService.create(
        body.name,
        body.password,
        body.phone,
        body.sex,
        body.address,
        body.email
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
