import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTasks1604177825617 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'tasks',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true, //cannot be negative
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'project_id',
          type: 'integer',
        },
        {
          name: 'description',
          type: 'varchar',
        },
        {
          name: 'status',
          type: 'bit',
        },
        {
          name: 'creation_date',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'finish_date',
          type: 'timestamp',
          isNullable: true,
        },
      ],
      foreignKeys: [
        {
          name: 'TaskProject',
          referencedTableName: 'projects',
          referencedColumnNames: ['id'],
          columnNames: ['project_id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tasks');
  }

}
