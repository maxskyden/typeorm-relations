import { IUser } from "src/models/User";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('users')
class User implements IUser {
  @PrimaryColumn()
  id: string

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
