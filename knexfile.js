import { config } from './src/utils/config.js';

export default {
    client: 'pg',
    connection: config.dbURI,
    migrations: {
        tableName: 'knex_migrations',
        directory: './src/migrations',
    },
    seeds: {
        directory: './src/seeds',
    },
};
