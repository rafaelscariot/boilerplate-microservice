import { CreateSampleDto } from '../dto';
import { ISample } from '.';
import { FilterQuery } from 'mongoose';

export interface ISampleRepository {
  findOne(options: FilterQuery<ISample>): Promise<ISample>;
  save(createSampleDto: CreateSampleDto): Promise<ISample>;
}
