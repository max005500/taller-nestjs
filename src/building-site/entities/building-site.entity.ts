import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'buildingSites' })
export class BuildingSite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  direccion: string;

  @Column({ type: 'varchar', length: 128 })
  nombre: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'int' })
  numero: number;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createAt: string;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updateAt: string;

  // TODO: tarea
  // @Column({})
  // encargado: string;
}
