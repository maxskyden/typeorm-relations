
import { ILabel } from "src/models/Label";
import { IOrder } from "src/models/Order";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import Order from "./Order";

@Entity('labels')
class Label implements ILabel {
  @PrimaryColumn()
  id: string

  @Column()
  name: string;

  @Column()
  url: string;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'order_id' })
  order: Order

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

export default Label
