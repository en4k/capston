// src/sitters/sitters.service.ts

import { Injectable } from "@nestjs/common";
import { Sitter } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class SittersService {
  constructor(private prisma: PrismaService) {}

  async create(
    userId: number,
    certification: string,
    experience: number
  ): Promise<Sitter> {
    const user = await this.prisma.sitter.create({
      data: {
        userId,
        certification,
        experience,
      },
    });
    return user;
  }
}
