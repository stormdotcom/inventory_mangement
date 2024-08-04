import dotenv from 'dotenv';

dotenv.config();

export const config = {
    dbURI: process.env.DATABASE_URL,
    port: process.env.PORT || 3000,
    sentryDSN: process.env.SENTRY_DSN,
};
