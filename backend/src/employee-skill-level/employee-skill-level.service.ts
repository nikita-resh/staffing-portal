import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeSkillLevelInput } from './dto/create-employee-skill-level.input';
import { EmployeeSkillLevel } from './entities/employee-skill-level.entity';

@Injectable()
export class EmployeeSkillLevelService {
  constructor(
    @InjectRepository(EmployeeSkillLevel)
    private employeeSkillLevelRepository: Repository<EmployeeSkillLevel>,
  ) {}

  async create(
    ESL: CreateEmployeeSkillLevelInput,
  ): Promise<EmployeeSkillLevel> {
    let EmployeeSkillLevel = this.employeeSkillLevelRepository.create(ESL);
    return this.employeeSkillLevelRepository.save(EmployeeSkillLevel);
  }

  async findAll(): Promise<EmployeeSkillLevel[]> {
    return this.employeeSkillLevelRepository.find({ relations: ['skill'] });
  }

  async findEmployeeSkils(id: number): Promise<EmployeeSkillLevel[]> {
    return this.employeeSkillLevelRepository.find({
      where: { employee_id: id },
    });
  }
}
