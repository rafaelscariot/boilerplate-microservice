import { KafkaOptions, Transport } from '@nestjs/microservices';
import { KafkaConfig } from '@nestjs/microservices/external/kafka.interface';
import { isDev, ConfigKafka } from './core/config';

const client: KafkaConfig = isDev
  ? {
      //develop connection
      clientId: ConfigKafka.ID,
      brokers: [ConfigKafka.HOST],
    }
  : {
      // production connection
      clientId: ConfigKafka.ID,
      brokers: [ConfigKafka.HOST],
      ssl: true,
      sasl: {
        mechanism: 'plain',
        username: '$ConnectionString',
        password: ConfigKafka.STRING_CONNECTION,
      },
      connectionTimeout: 30000,
      requestTimeout: 30000,
    };

export const microserviceConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client,
    consumer: {
      groupId: ConfigKafka.GROUP,
    },
    subscribe: {
      fromBeginning: ConfigKafka.FROM_BEGINNING,
    },
  },
};
