// src/auth/auth.controller.ts
import { Controller, Post, Body, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto"; // DTO를 사용하여 입력 데이터 구조 정의

@Controller("auth")
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService
  ) {}

  @Post("login")
  async login(
    @Body() loginDto: LoginDto
  ): Promise<{ message: string; token?: string }> {
    const { username, password } = loginDto;
    const user = await this.userService.findOne(username);
    console.log(process.env.JWT_SECRET);

    if (
      user &&
      (await this.authService.validatePassword(password, user.password))
    ) {
      const token = this.authService.generateJwtToken(user);
      return { message: "로그인 성공", token };
    } else {
      throw new UnauthorizedException("로그인 실패");
    }
  }
}
