import { IUser } from "src/models/User";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import Order from "./Order";

@Entity('users')
class User implements IUser {
  @PrimaryColumn()
  id: string

  @OneToMany(() => Order, orders => orders.user)
  orders: Order[]

  @Column()
  name: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export default User
