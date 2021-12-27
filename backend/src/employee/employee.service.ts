import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async findAll() {
    return this.employeeRepository
      .createQueryBuilder('employee')
      .leftJoinAndSelect('employee.SkillLevel', 'employee_skill_level')
      .where('employee.id = employee_skill_level.employee_id')
      .leftJoinAndSelect('employee_skill_level.skill_id', 'skill')
      .where('employee_skill_level.skill_id = skill.id')
      .getMany();
  }

  async create(employee: CreateEmployeeInput): Promise<Employee> {
    let emp = this.employeeRepository.create(employee);
    return this.employeeRepository.save(emp);
  }
}
