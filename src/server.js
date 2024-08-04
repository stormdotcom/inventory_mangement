import '../instrument.mjs';

import app from './app.js';
import { config } from './utils/config.js';

const PORT = config.port;

const startServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

startServer();
