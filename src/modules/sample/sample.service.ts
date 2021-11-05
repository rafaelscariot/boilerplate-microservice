import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateSampleDto } from '@common/dtos/create-sample.dto';
import { ISample } from '@common/interfaces/sample.interface';
import { SampleRepository } from './sample.repository';

@Injectable()
export class SampleService {
  constructor(private readonly sampleRepository: SampleRepository) {}

  async create(createSampleDto: CreateSampleDto): Promise<ISample> {
    try {
      const { email } = createSampleDto;

      const foundSample = await this.sampleRepository.findOne({ email });

      if (foundSample) return;

      return this.sampleRepository.save(createSampleDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}
