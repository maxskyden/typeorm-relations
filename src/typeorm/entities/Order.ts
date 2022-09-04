
import { IOrder } from "src/models/Order";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import User from "./User";

@Entity('orders')
class Order implements IOrder {
  @PrimaryColumn()
  id: string

  @Column()
  pid: string;

  @Column()
  payment_status: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

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

export default Order
