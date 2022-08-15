import { MigrationInterface, QueryRunner } from "typeorm";

export class user1660523033352 implements MigrationInterface {
    name = 'user1660523033352'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" UUID DEFAULT gen_random_uuid() NOT NULL, "name" varchar(255) NOT NULL, "password" varchar(255) NOT NULL, "email" varchar(255) NOT NULL, "role" varchar(255) NOT NULL, "createAt" timestamptz NOT NULL DEFAULT current_timestamp(), "updateAt" timestamptz NOT NULL DEFAULT current_timestamp(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
