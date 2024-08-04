import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import { config } from './src/utils/config.js';

Sentry.init({
    dsn: config.sentryDSN,
    integrations: [
        nodeProfilingIntegration(),
    ],

    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
});
export default Sentry;
