import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateLabels1662183279340 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "labels",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "url",
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
      await queryRunner.dropTable("labels")
    }

}
