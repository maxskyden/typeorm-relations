import './dotenv-ci'
import { env } from 'process';
import { DataSource, DataSourceOptions } from 'typeorm';

const Config: DataSourceOptions ={
  type: 'postgres',
  host: env.DATABASE_HOST,
  port:  Number(env.DATABASE_PORT),
  username: env.DATABASE_USER,
  password: env.DATABASE_PASS,
  database: env.DATABASE_NAME,
  entities: [],
  migrations: [],
  synchronize: false,
  migrationsRun: true,
  logging: false
}
export const PostgresDataSource: DataSource = new DataSource(Config);
