import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { ResolutionsService } from './resolutions.service';
import { CreateResolutionDto } from './dto/create-resolution.dto';

@UseGuards(JwtAuthGuard)
@Controller()
export class ResolutionsController {
  constructor(private readonly service: ResolutionsService) {}

  @Post('resolutions') create(@Body() dto: CreateResolutionDto) { return this.service.create(dto); }
  @Get('resolutions') findAll() { return this.service.findAll(); }
  @Get('resolutions/:id') findOne(@Param('id', ParseIntPipe) id: number) { return this.service.findOne(id); }
  @Delete('resolutions/:id') remove(@Param('id', ParseIntPipe) id: number) { return this.service.remove(id); }

  @Get('incidents/:id/resolution')
  byIncident(@Param('id', ParseIntPipe) id: number) { return this.service.findByIncident(id); }
}