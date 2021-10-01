import { Injectable, BadRequestException, Inject } from '@nestjs/common';
import { CreateSampleDto } from './dto/create-sample.dto';
import { ISample } from './interface/sample.interface';
import { SampleRepository } from './sample.repository';

@Injectable()
export class SampleService {
  constructor(private readonly sampleRepository: SampleRepository) {}

  async create(createSampleDto: CreateSampleDto): Promise<ISample> {
    try {
      const { email } = createSampleDto;

      const foundSample = await this.sampleRepository.findOne({ email });

      if (foundSample) {
        throw new BadRequestException(
          `Sample with e-mail ${email} already exists`,
        );
      }

      return this.sampleRepository.save(createSampleDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}
