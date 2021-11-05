import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SampleModule } from './modules/sample/sample.module';
import { database } from '@config/config';
import { RedisCacheModule } from '@modules/redis-cache/redis-cache.module';

@Module({
  imports: [
    MongooseModule.forRoot(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    SampleModule,
    RedisCacheModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
