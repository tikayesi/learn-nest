import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Biodata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;
}
