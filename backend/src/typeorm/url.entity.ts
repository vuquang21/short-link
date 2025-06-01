import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('urls')
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  shortCode: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  originalUrl: string;

  @Column({ type: 'int', default: 0, nullable: false })
  visitCount: number;

  @CreateDateColumn({ type: 'datetime', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', nullable: false })
  createdDate: Date;
}