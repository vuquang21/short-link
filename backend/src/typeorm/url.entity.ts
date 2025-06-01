import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('Urls')
export class Url {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    shortCode: string;

    @Column()
    originalUrl: string;

    @Column({ default: 0 })
    visitCount: number;

    @CreateDateColumn()
    createdDate: Date;
} 