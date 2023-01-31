import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class itemsTable1675199974959 implements MigrationInterface {
    name = 'removedEnum1651860744841'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "items",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "order",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "checked",
                        type: "boolean",
                        isNullable: false,
                        default: false,
                    }
                ],
            }),
            true,
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("items");
    }
}
