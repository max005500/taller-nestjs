import { MigrationInterface, QueryRunner } from "typeorm";

export class buildingAddcreateTime1660369907624 implements MigrationInterface {
    name = 'buildingAddcreateTime1660369907624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buildingSites" ADD "createAt" timestamptz NOT NULL DEFAULT current_timestamp()`);
        await queryRunner.query(`ALTER TABLE "buildingSites" ADD "updateAt" timestamptz NOT NULL DEFAULT current_timestamp()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buildingSites" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "buildingSites" DROP COLUMN "createAt"`);
    }

}
