import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateOrders1662183054885 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orders",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "pid",
            type: "varchar",
          },
          {
            name: "payment_status",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()"
          }
        ],
        })
      )
    }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("orders")
    }

}
