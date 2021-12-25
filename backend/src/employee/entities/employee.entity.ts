import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Employee {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  role: string;

  @Column('boolean', { default: false })
  @Field()
  is_removed: boolean;
}
