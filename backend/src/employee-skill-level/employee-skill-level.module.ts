import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeSkillLevelService } from './employee-skill-level.service';
import { EmployeeSkillLevelResolver } from './employee-skill-level.resolver';
import { EmployeeSkillLevel } from './entities/employee-skill-level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeSkillLevel])],
  providers: [EmployeeSkillLevelResolver, EmployeeSkillLevelService],
})
export class EmployeeSkillLevelModule {}
