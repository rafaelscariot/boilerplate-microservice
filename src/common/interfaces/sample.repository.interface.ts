import { CreateSampleDto } from '@common/dtos';
import { ISample } from '.';
import { FilterQuery } from 'mongoose';

export interface ISampleRepository {
  findOne(options: FilterQuery<ISample>): Promise<ISample>;
  save(createSampleDto: CreateSampleDto): Promise<ISample>;
}
