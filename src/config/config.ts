require('dotenv').config();

const REQUIRED_ENV_VARS = [
  'DB_URI',
  'TEST_TOPIC',
  'KAFKA_ID',
  'KAFKA_HOST',
  'KAFKA_GROUP_ID',
  'KAFKA_SENDER_ACTIVE',
  'KAFKA_SENDER_ACTIVE',
  'KAFKA_FROM_BEGINNING',
  'REDIS_HOST',
  'REDIS_PORT',
  'REDIS_CACHE_TTL',
  'REDIS_MAX_ITEM_IN_CACHE',
  //TODO: its only necessary if its in production environment 'KAFKA_STRING_CONNECTION',
];

export function validateEnvVars(): void {
  REQUIRED_ENV_VARS.forEach((envVar) => {
    const val = process.env[envVar];
    if (val === '' || val === null || val === undefined) {
      throw new Error(`Required ENV VAR not set: ${envVar}`);
    }
  });
}

const { env } = process;

export class ConfigRedis {
  static readonly HOST = env.REDIS_HOST;
  static readonly PORT = env.REDIS_PORT;
  static readonly CACHE_TTL = env.REDIS_CACHE_TTL;
  static readonly MAX_ITEM_IN_CACHE = env.REDIS_MAX_ITEM_IN_CACHE;
}

export class ConfigKafka {
  static readonly HOST = env.KAFKA_HOST;
  static readonly GROUP = env.KAFKA_GROUP_ID;
  static readonly ID = env.KAFKA_ID;
  static readonly KAFKA_STRING_CONNECTION = env.STRING_CONNECTION;
  static readonly KAFKA_FROM_BEGINNING: boolean =
    env.KAFKA_FROM_BEGINNING === 'true' ? true : false;
}

export class TOPICS {
  static readonly TEST = env.TEST_TOPIC;
}

export const isDev =
  env.NODE_ENV !== 'production' && env.NODE_ENV !== 'homolog';
export const database = env.DB_URL;
export const enviroment = env.NODE_ENV;
export const isKafkaSenderActive: boolean =
  env.KAFKA_SENDER_ACTIVE === 'true' || false;
