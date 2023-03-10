import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Biodata } from './Biodata';
import { BiodataService } from './BiodataService';

@Controller('biodata')
export class BiodataController {
  constructor(private biodataService: BiodataService) {}

  @Get()
  async findAll(): Promise<Biodata[]> {
    return await this.biodataService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Biodata> {
    return await this.biodataService.findById(id);
  }

  @Post()
  async create(@Body() biodata: Biodata): Promise<Biodata> {
    return await this.biodataService.create(biodata);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() biodata: Biodata): Promise<void> {
    await this.biodataService.update(id, biodata);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.biodataService.delete(id);
  }
}
