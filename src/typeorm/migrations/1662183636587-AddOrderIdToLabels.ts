import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class AddOrderIdToLabels1662183636587 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "labels",
      new TableColumn({
        name: "order_id",
        type: "uuid",
        isNullable: true
      }),
    )
    await queryRunner.createForeignKey(
      "labels",
      new TableForeignKey({
          name: "LabelsOrder",
          columnNames: ["order_id"],
          referencedColumnNames: ["id"],
          referencedTableName: "orders",
          onDelete: "SET NULL",
      }),
  )
    }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("labels", "LabelsOrder")
    await queryRunner.dropColumn("labels", "order_id")
    }

}
