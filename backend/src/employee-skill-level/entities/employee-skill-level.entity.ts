import { ObjectType, Field } from '@nestjs/graphql';
import { Employee } from 'src/employee/entities/employee.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class EmployeeSkillLevel {
  @PrimaryGeneratedColumn('increment')
  @Field({ nullable: false })
  id: number;

  @Column()
  @ManyToOne(() => Employee, (employee) => employee.SkillLevel)
  @Field({ nullable: false })
  employee_id: number;

  @Column()
  @Field({ nullable: false })
  skill_id: number;

  @Column()
  @Field({ nullable: false })
  level_id: number;
}
