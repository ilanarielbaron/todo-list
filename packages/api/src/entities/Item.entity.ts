import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("items")
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
    id: number;

  @Column()
    description: string;

  @Column({ unique: true })
    order: number;

  @Column()
    checked: boolean;
}
