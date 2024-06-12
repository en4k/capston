import { Sitter } from "@prisma/client";

export class SitterEntity implements Sitter {
  certification: string | null;
  experience: number | null;
  id: number;
  userId: number;
}
