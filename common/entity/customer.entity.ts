import { Customer } from "@prisma/client";

export class CustomerEntity implements Customer {
  id: number;
  userId: number;
}
