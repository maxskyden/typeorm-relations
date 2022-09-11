import 'reflect-metadata';
import '@config/dotenv-ci'

import { app } from './app';
import { PostgresDataSource } from '@config/datasource';

async function init() {
  try {
    await PostgresDataSource.initialize()
    app.listen(process.env.APP_PORT, () => {
      console.log(`🟢 host: ${process.env.APP_URL}, port: ${(process.env.APP_PORT)}`);
    });
  } catch (error) {
    return console.error("Error no server", error)
  }
}
init()
