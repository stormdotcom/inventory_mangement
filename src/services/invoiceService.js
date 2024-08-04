import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import puppeteer from 'puppeteer';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const generatePDF = async (invoiceData) => {
    try {
        const templatePath = path.resolve(__dirname, '../../template/invoice_template.docx');
        const content = fs.readFileSync(templatePath, 'binary');

        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });

        doc.setData(invoiceData);

        try {
            doc.render();
        } catch (error) {
            throw new Error('Error rendering DOCX: ' + error.message);
        }

        const buf = doc.getZip().generate({ type: 'nodebuffer' });
        const tempDocxPath = path.resolve(__dirname, 'temp_invoice.docx');
        fs.writeFileSync(tempDocxPath, buf);

        const htmlContent = `
            <html>
                <body>
                    <iframe src="data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,${buf.toString('base64')}" style="width: 100%; height: 100%;"></iframe>
                </body>
            </html>
        `;

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

        const pdf = await page.pdf({ format: 'A4' });

        await browser.close();

        return { pdf, tempDocxPath };
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw error;
    }
};
