import { CacheModule, Module } from '@nestjs/common';
import { RedisCacheService } from './redis-cache.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigRedis } from '@config/index';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get(ConfigRedis.HOST),
        port: configService.get(ConfigRedis.PORT),
        ttl: configService.get(ConfigRedis.CACHE_TTL),
        max: configService.get(ConfigRedis.MAX_ITEM_IN_CACHE),
      }),
    }),
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService],
})
export class RedisCacheModule {}
