import { Injectable } from '@nestjs/common';
import { Model, FilterQuery } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSampleDto } from '@common/dtos/create-sample.dto';
import { ISample, ISampleRepository } from '@common/interfaces';

@Injectable()
export class SampleRepository implements ISampleRepository {
  constructor(@InjectModel('Sample') private sampleModel: Model<ISample>) {}

  async findOne(options: FilterQuery<ISample>): Promise<ISample> {
    return this.sampleModel.findOne(options).exec();
  }

  async save(createSampleDto: CreateSampleDto): Promise<ISample> {
    const createdSample = new this.sampleModel(createSampleDto);
    return createdSample.save();
  }
}
