import { Module } from '@nestjs/common';
import { SampleService } from './sample.service';
import { SampleController } from './sample.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SampleSchema } from '@common/interfaces/sample.schema';
import { SampleRepository } from './sample.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Sample', schema: SampleSchema, collection: 'Sample' },
    ]),
  ],
  controllers: [SampleController],
  providers: [SampleService, SampleRepository],
  exports: [SampleService, SampleRepository],
})
export class SampleModule {}
