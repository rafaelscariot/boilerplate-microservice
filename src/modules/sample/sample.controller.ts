import { Controller, Logger } from '@nestjs/common';
import { SampleService } from './sample.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ISample } from '@common/interfaces/sample.interface';

@Controller('sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  private readonly logger = new Logger(SampleController.name);

  @MessagePattern('test-topic')
  async create(@Payload() data: any): Promise<ISample> {
    try {
      return this.sampleService.create(data.value);
    } catch (error) {
      this.logger.log(error);
    }
  }
}
