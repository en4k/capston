import { $Enums, User } from "@prisma/client";

export class UserEntity implements User {
  address: string;
  email: string;
  id: number;
  name: string;
  password: string;
  phone: string;
  role: $Enums.Role;
  sex: string;
}
