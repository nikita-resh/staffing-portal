import { ObjectType, Field } from '@nestjs/graphql';
import { Employee } from 'src/employee/entities/employee.entity';
import { Skill } from 'src/skill/entities/skill.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class EmployeeSkillLevel {
  @PrimaryGeneratedColumn('increment')
  @Field({ nullable: false })
  id: number;

  @ManyToOne(() => Employee, (employee) => employee.SkillLevel)
  @Field({ nullable: true })
  employee_id: number;

  @Column()
  @ManyToOne(() => Skill, (skill) => skill.ESL)
  @Field({ nullable: false })
  skill_id: number;

  @Column()
  @Field({ nullable: false })
  level_id: number;
}
