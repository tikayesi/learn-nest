import { EntityRepository, Repository } from 'typeorm';
import { Biodata } from './Biodata';

@EntityRepository(Biodata)
export class BiodataRepository extends Repository<Biodata> {
  async findAll(): Promise<Biodata[]> {
    return await this.find();
  }

  async findById(id: any): Promise<Biodata> {
    return await this.findOne(id);
  }

  async createBiodata(biodata: Biodata): Promise<Biodata> {
    return await this.save(biodata);
  }

  async updateBiodata(id: any, biodata: Biodata): Promise<Biodata> {
    await this.update(id, biodata);
    return await this.findOne(id);
  }

  async deleteBiodata(id: number): Promise<void> {
    await this.delete(id);
  }
}
