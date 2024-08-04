import { generatePDF } from '../services/invoiceService.js';

export const generateInvoicePDF = async (req, res) => {
    try {
        const { pdf, tempDocxPath } = await generatePDF(req.body);

        // Send the DOCX file to the client
        res.sendFile(tempDocxPath, (err) => {
            if (err) {
                console.error('Error sending file:', err);
                res.status(500).send('Error sending file');
            } else {
                // Delete the temporary file after sending it
                fs.unlinkSync(tempDocxPath);
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error generating PDF', error });
    }
};
