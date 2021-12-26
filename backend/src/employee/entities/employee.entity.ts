import { Field, ObjectType } from '@nestjs/graphql';
import { EmployeeSkillLevel } from 'src/employee-skill-level/entities/employee-skill-level.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(
    () => EmployeeSkillLevel,
    (employeeSkillLevel) => employeeSkillLevel.employee_id,
  )
  @Field(() => [EmployeeSkillLevel], { nullable: true })
  SkillLevel: EmployeeSkillLevel[];
}
