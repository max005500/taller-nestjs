import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      ssl: true,
      extra: {
        options: '--cluster=polite-dibbler-1643',
      },
      synchronize: false,
    },
    database2: {},
    apiKey: process.env.API_KEY,
  };
});
