import { Pet } from "@prisma/client";

export class PetEntity implements Pet {
  id: number;
  name: string;
  userId: number;
}
