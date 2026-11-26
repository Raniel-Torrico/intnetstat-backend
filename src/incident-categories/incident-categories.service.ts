import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IncidentCategory } from './entities/incident-category.entity';
import { CreateIncidentCategoryDto } from './dto/create-incident-category.dto';
import { UpdateIncidentCategoryDto } from './dto/update-incident-category.dto';

@Injectable()
export class IncidentCategoriesService {
  constructor(@InjectRepository(IncidentCategory) private readonly repo: Repository<IncidentCategory>) {}

  create(dto: CreateIncidentCategoryDto) { return this.repo.save(this.repo.create(dto)); }
  findAll() { return this.repo.find(); }

  async findOne(id: number) {
    const row = await this.repo.findOne({ where: { CategoryID: id } });
    if (!row) throw new NotFoundException(`Category ${id} not found`);
    return row;
  }

  async update(id: number, dto: UpdateIncidentCategoryDto) {
    const row = await this.findOne(id);
    Object.assign(row, dto);
    return this.repo.save(row);
  }

  async remove(id: number) {
    const row = await this.findOne(id);
    await this.repo.remove(row);
    return { deleted: true, CategoryID: id };
  }
}