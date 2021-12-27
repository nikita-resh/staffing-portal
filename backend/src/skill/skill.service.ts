import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSkillInput } from './dto/create-skill.input';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill) private skillRepository: Repository<Skill>,
  ) {}

  async create(createSkillInput: CreateSkillInput) {
    const skill = this.skillRepository.create(createSkillInput);
    return this.skillRepository.save(skill);
  }

  async findAll() {
    return this.skillRepository.find();
  }

  async findOne(ID: number) {
    return this.skillRepository.find({ where: { id: ID } });
  }
}
