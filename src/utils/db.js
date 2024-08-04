import Knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../../knexfile.js';

const knex = Knex(knexConfig);
knex.on('query', (queryData) => {
    console.log('SQL Query:', queryData.sql);
    console.log('Bindings:', queryData.bindings);
});
Model.knex(knex);

export default knex;
