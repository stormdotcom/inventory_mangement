import Invoice from '../models/Invoice.js';

export class InvoiceRepository {
    async create(data) {
        return await Invoice.query().insert(data);
    }

    async findById(id) {
        return await Invoice.query().findById(id);
    }

    async findAll() {
        return await Invoice.query().select();
    }

    async update(id, data) {
        return await Invoice.query().patchAndFetchById(id, data);
    }

    async delete(id) {
        return await Invoice.query().deleteById(id);
    }
}
