import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Incident } from './entities/incident.entity';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';

@Injectable()
export class IncidentsService {
  constructor(@InjectRepository(Incident) private readonly repo: Repository<Incident>) {}

  create(dto: CreateIncidentDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find({
      relations: { ReportedByUser: true, Location: true, Category: true },
    });
  }

  async findOne(id: number) {
    const row = await this.repo.findOne({
      where: { IncidentID: id },
      relations: {
        ReportedByUser: true,
        Location: true,
        Category: true,
        assignments: true,
        resolution: true,
      },
    });
    if (!row) throw new NotFoundException(`Incident ${id} not found`);
    return row;
  }

  async update(id: number, dto: UpdateIncidentDto) {
    const row = await this.repo.findOne({ where: { IncidentID: id } });
    if (!row) throw new NotFoundException(`Incident ${id} not found`);
    Object.assign(row, dto);
    return this.repo.save(row);
  }

  async remove(id: number) {
    const row = await this.repo.findOne({ where: { IncidentID: id } });
    if (!row) throw new NotFoundException(`Incident ${id} not found`);
    await this.repo.remove(row);
    return { deleted: true, IncidentID: id };
  }
}