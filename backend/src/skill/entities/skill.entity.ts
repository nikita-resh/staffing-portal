import { ObjectType, Field } from '@nestjs/graphql';
import { EmployeeSkillLevel } from 'src/employee-skill-level/entities/employee-skill-level.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Skill {
  @OneToMany(() => EmployeeSkillLevel, (esl) => esl.skill_id)
  ESL: EmployeeSkillLevel[];

  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column()
  skill_name: string;
}
