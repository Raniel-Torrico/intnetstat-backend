import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationsService {
  constructor(@InjectRepository(Location) private readonly repo: Repository<Location>) {}

  create(dto: CreateLocationDto) { return this.repo.save(this.repo.create(dto)); }
  findAll() { return this.repo.find(); }

  async findOne(id: number) {
    const row = await this.repo.findOne({ where: { LocationID: id } });
    if (!row) throw new NotFoundException(`Location ${id} not found`);
    return row;
  }

  async update(id: number, dto: UpdateLocationDto) {
    const row = await this.findOne(id);
    Object.assign(row, dto);
    return this.repo.save(row);
  }

  async remove(id: number) {
    const row = await this.findOne(id);
    await this.repo.remove(row);
    return { deleted: true, LocationID: id };
  }
}