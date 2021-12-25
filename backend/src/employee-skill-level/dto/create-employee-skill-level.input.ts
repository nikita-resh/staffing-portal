import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeSkillLevelInput {
  @Field({ nullable: false })
  employee_id: number;

  @Field({ nullable: false })
  skill_id: number;

  @Field({ nullable: false })
  level_id: number;
}
