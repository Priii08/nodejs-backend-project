import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// NOTE:
// - `schema` can point to a file or a glob. We're using a glob that matches all *.schema.ts files.
// - `out` is where generated SQL migrations will be placed.
// - `dbCredentials` can be a connection string or an object with connection details.
// - Make sure to adjust the `dbCredentials` according to your environment and security practices.
export default defineConfig({
  schema: './src/db/schemas/index.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!),
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    ssl: {
      rejectUnauthorized: false, // Required for AWS RDS
    },
  },
  verbose: true,
  strict: true,
});
