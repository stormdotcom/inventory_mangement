import { Model } from 'objection';

class Invoice extends Model {
    static get tableName() {
        return 'invoices';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['invoice_number', 'date', 'invoice_to', 'items'],

            properties: {
                id: { type: 'integer' },
                invoice_number: { type: 'string', minLength: 1, maxLength: 255 },
                date: { type: 'string', format: 'date' },
                invoice_to: { type: 'string', minLength: 1, maxLength: 255 },
                mobile: { type: 'string', minLength: 1, maxLength: 20 },
                email: { type: 'string', minLength: 1, maxLength: 255 },
                state: { type: 'string', minLength: 1, maxLength: 50 },
                code: { type: 'string', minLength: 1, maxLength: 50 },
                items: { type: 'array', items: { type: 'object' } },
            },
        };
    }
}

export default Invoice;
