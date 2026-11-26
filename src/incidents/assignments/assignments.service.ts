import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IncidentAssignment } from '../entities/incident-assignment.entity';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';

@Injectable()
export class AssignmentsService {
  constructor(
    @InjectRepository(IncidentAssignment) private readonly repo: Repository<IncidentAssignment>,
  ) {}

  create(dto: CreateAssignmentDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find({
      relations: { Incident: true, Technician: true, AssignedByUser: true },
    });
  }

  async findOne(id: number) {
    const row = await this.repo.findOne({
      where: { AssignmentID: id },
      relations: { Incident: true, Technician: true, AssignedByUser: true },
    });
    if (!row) throw new NotFoundException(`Assignment ${id} not found`);
    return row;
  }

  async update(id: number, dto: UpdateAssignmentDto) {
    const row = await this.repo.findOne({ where: { AssignmentID: id } });
    if (!row) throw new NotFoundException(`Assignment ${id} not found`);
    Object.assign(row, dto);
    return this.repo.save(row);
  }

  async remove(id: number) {
    const row = await this.repo.findOne({ where: { AssignmentID: id } });
    if (!row) throw new NotFoundException(`Assignment ${id} not found`);
    await this.repo.remove(row);
    return { deleted: true, AssignmentID: id };
  }
}