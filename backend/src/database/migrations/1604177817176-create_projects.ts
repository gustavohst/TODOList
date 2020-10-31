import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProjects1604177817176 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'projects',
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
                name: 'user_id',
                type: 'integer',
              },
              {
                name: 'name',
                type: 'varchar',
              },
            ],
            foreignKeys: [
                {
                  name: 'UserId',
                  referencedTableName: 'users',
                  referencedColumnNames: ['id'],
                  columnNames: ['user_id'],
                  onDelete: 'CASCADE',
                  onUpdate: 'CASCADE',
                },
              ],
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('projects');
    }

}
