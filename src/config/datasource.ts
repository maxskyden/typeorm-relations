import './dotenv-ci'
import { env } from 'process';
import { DataSource, DataSourceOptions } from 'typeorm';
import User from 'src/typeorm/entities/User';
import { CreateUsers1662182947714 } from 'src/typeorm/migrations/1662182947714-CreateUsers';
import { CreateOrders1662183054885 } from 'src/typeorm/migrations/1662183054885-CreateOrders';
import { CreateLabels1662183279340 } from 'src/typeorm/migrations/1662183279340-CreateLabels';
import { AddOrderIdToLabels1662183636587 } from 'src/typeorm/migrations/1662183636587-AddOrderIdToLabels';
import { AddUserIdToOrders1662184215461 } from 'src/typeorm/migrations/1662184215461-AddUserIdToOrders';
import Order from 'src/typeorm/entities/Order';
import Label from 'src/typeorm/entities/Label';

const Config: DataSourceOptions ={
  type: 'postgres',
  host: env.DATABASE_HOST,
  port:  Number(env.DATABASE_PORT),
  username: env.DATABASE_USER,
  password: env.DATABASE_PASS,
  database: env.DATABASE_NAME,
  entities: [User, Order, Label],
  migrations: [
    CreateUsers1662182947714,
    CreateOrders1662183054885,
    CreateLabels1662183279340,
    AddOrderIdToLabels1662183636587,
    AddUserIdToOrders1662184215461
  ],
  synchronize: false,
  migrationsRun: true,
  logging: false
}
export const PostgresDataSource: DataSource = new DataSource(Config);
