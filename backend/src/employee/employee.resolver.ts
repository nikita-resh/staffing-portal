import { Resolver, Query } from '@nestjs/graphql';
import { Employee } from './entities/employee.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  @Query(() => [Employee], { name: 'getAllEmployees' })
  findAll() {}
}
