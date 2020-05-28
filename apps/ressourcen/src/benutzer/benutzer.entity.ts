import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import {BenutzerDto} from '@app/views';

@Entity()
export class BenutzerEntity implements BenutzerDto {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: true })
  prename: string;

  @Column({ nullable: true })
  surname: string;

  @Column()
  email: string;

  @Column()
  username: string;
}
