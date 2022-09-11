import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class AddUserIdToOrders1662184215461 implements MigrationInterface {


  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "orders",
      new TableColumn({
        name: "user_id",
        type: "uuid",
        isNullable: true
      }),
    )
    await queryRunner.createForeignKey(
      "orders",
      new TableForeignKey({
          name: "OrdersUser",
          columnNames: ["user_id"],
          referencedColumnNames: ["id"],
          referencedTableName: "users",
          onDelete: "SET NULL",
      }),
  )
    }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("orders", "OrdersUser")
    await queryRunner.dropColumn("orders", "user_id")
    }


}
