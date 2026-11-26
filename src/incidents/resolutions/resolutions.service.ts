import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IncidentResolution } from '../entities/incident-resolution.entity';
import { CreateResolutionDto } from './dto/create-resolution.dto';

@Injectable()
export class ResolutionsService {
  constructor(
    @InjectRepository(IncidentResolution) private readonly repo: Repository<IncidentResolution>,
  ) {}

  async create(dto: CreateResolutionDto) {
    const exists = await this.repo.findOne({ where: { IncidentID: dto.IncidentID } });
    if (exists) throw new ConflictException(`Incident ${dto.IncidentID} already has a resolution`);
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find({ relations: { Incident: true, ResolvedByTechnician: true } });
  }

  async findOne(id: number) {
    const row = await this.repo.findOne({
      where: { ResolutionID: id },
      relations: { Incident: true, ResolvedByTechnician: true },
    });
    if (!row) throw new NotFoundException(`Resolution ${id} not found`);
    return row;
  }

  async findByIncident(incidentId: number) {
    const row = await this.repo.findOne({
      where: { IncidentID: incidentId },
      relations: { Incident: true, ResolvedByTechnician: true },
    });
    if (!row) throw new NotFoundException(`No resolution for incident ${incidentId}`);
    return row;
  }

  async remove(id: number) {
    const row = await this.findOne(id);
    await this.repo.remove(row);
    return { deleted: true, ResolutionID: id };
  }
}