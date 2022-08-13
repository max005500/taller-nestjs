import { MigrationInterface, QueryRunner } from "typeorm";

export class init1660369307352 implements MigrationInterface {
    name = 'init1660369307352'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "buildingSites" ("id" UUID DEFAULT gen_random_uuid() NOT NULL, "direccion" varchar(255) NOT NULL, "nombre" varchar(128) NOT NULL, "descripcion" string NOT NULL, "numero" int8 NOT NULL, "email" varchar(255) NOT NULL, CONSTRAINT "PK_bae8d4cd4828d4eb6546f769e81" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "buildingSites"`);
    }

}
