import { Connection, createConnection } from 'typeorm';
import Entries from "../enities";

export const dbCreateConnection = async (): Promise<Connection | null> => {
  try {
    const conn = await createConnection({
      type: 'postgres',
      name: 'default',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      synchronize: true,
      logging: false,
      entities: Entries,
    });
    
    console.log(`DB connection success. DB: '${conn.options.database}'`);
  } catch (err) {
    console.log(err);
  }
  return null;
};