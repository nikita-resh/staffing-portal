import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmployeeSkillLevelService } from './employee-skill-level.service';
import { EmployeeSkillLevel } from './entities/employee-skill-level.entity';
import { CreateEmployeeSkillLevelInput } from './dto/create-employee-skill-level.input';

@Resolver(() => EmployeeSkillLevel)
export class EmployeeSkillLevelResolver {
  constructor(
    private readonly employeeSkillLevelService: EmployeeSkillLevelService,
  ) {}

  @Mutation(() => EmployeeSkillLevel)
  createEmployeeSkillLevel(
    @Args('createEmployeeSkillLevelInput')
    createEmployeeSkillLevelInput: CreateEmployeeSkillLevelInput,
  ) {
    return this.employeeSkillLevelService.create(createEmployeeSkillLevelInput);
  }

  @Query(() => [EmployeeSkillLevel], { name: 'getAllEmployeesSkillLevel' })
  findAll() {
    return this.employeeSkillLevelService.findAll();
  }

  @Query(() => [EmployeeSkillLevel], { name: 'getEmployeeSkillLevel' })
  findEmployeeSkils(@Args('id', { type: () => Int }) id: number) {
    return this.employeeSkillLevelService.findEmployeeSkils(id);
  }
}
