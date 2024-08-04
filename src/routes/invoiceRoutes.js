import express from 'express';
import { generateInvoicePDF } from '../controllers/invoiceController.js';

const router = express.Router();

router.post('/api/invoices', generateInvoicePDF);

export default router;
