
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Technician } from './entities/technician.entity';
import { CreateTechnicianDto } from './dto/create-technician.dto';
import { UpdateTechnicianDto } from './dto/update-technician.dto';

@Injectable()
export class TechniciansService {
  constructor(
    @InjectRepository(Technician)
    private readonly repo: Repository<Technician>,
  ) {}

  create(dto: CreateTechnicianDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const row = await this.repo.findOne({
      where: { TechnicianID: id },
    });

    if (!row) {
      throw new NotFoundException(`Technician ${id} not found`);
    }

    return row;
  }

  async update(id: number, dto: UpdateTechnicianDto) {
    const row = await this.findOne(id);
    Object.assign(row, dto);
    return this.repo.save(row);
  }

  async remove(id: number) {
    const row = await this.findOne(id);
    await this.repo.remove(row);

    return {
      deleted: true,
      TechnicianID: id,
    };
  }
}
