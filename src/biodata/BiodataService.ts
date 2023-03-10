import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Biodata } from './Biodata';

@Injectable()
export class BiodataService {
  constructor(
    @InjectRepository(Biodata)
    private readonly biodataRepository: Repository<Biodata>,
  ) {}

  async findAll(): Promise<Biodata[]> {
    return await this.biodataRepository.find();
  }

  async findById(id: any): Promise<Biodata> {
    return await this.biodataRepository.findOne(id);
  }

  async create(biodata: Biodata): Promise<Biodata> {
    return await this.biodataRepository.save(biodata);
  }

  async update(id: any, biodata: Biodata): Promise<Biodata> {
    await this.biodataRepository.update(id, biodata);
    return await this.biodataRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.biodataRepository.delete(id);
  }
}
