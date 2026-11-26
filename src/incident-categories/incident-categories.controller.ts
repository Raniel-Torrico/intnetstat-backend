import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { IncidentCategoriesService } from './incident-categories.service';
import { CreateIncidentCategoryDto } from './dto/create-incident-category.dto';
import { UpdateIncidentCategoryDto } from './dto/update-incident-category.dto';

@UseGuards(JwtAuthGuard)
@Controller('incident-categories')
export class IncidentCategoriesController {
  constructor(private readonly service: IncidentCategoriesService) {}

  @Post() create(@Body() dto: CreateIncidentCategoryDto) { return this.service.create(dto); }
  @Get() findAll() { return this.service.findAll(); }
  @Get(':id') findOne(@Param('id', ParseIntPipe) id: number) { return this.service.findOne(id); }
  @Patch(':id') update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateIncidentCategoryDto) { return this.service.update(id, dto); }
  @Delete(':id') remove(@Param('id', ParseIntPipe) id: number) { return this.service.remove(id); }
}