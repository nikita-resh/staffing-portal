import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class EmployeeSkillLevel {
  @PrimaryGeneratedColumn('increment')
  @Field({ nullable: false })
  id: number;

  @Column()
  @Field({ nullable: false })
  employee_id: number;

  @Column()
  @Field({ nullable: false })
  skill_id: number;

  @Column()
  @Field({ nullable: false })
  level_id: number;
}
