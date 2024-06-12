// src/users/users.service.ts

import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { User } from "@prisma/client";
import { AuthService } from "auth/auth.service"; //지울까 이거 ?

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService
  ) {}

  async create(
    name: string,
    password: string,
    phone: string,
    sex: string,
    address: string,
    email: string
  ): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        address,
        email,
        name,
        password: await this.authService.hashPassword(password),
        phone,
        sex,
      },
    });
    return user;
  }

  async findOne(name: string): Promise<User | undefined> {
    return this.prisma.user.findFirst({ where: { name } });
  }
}
