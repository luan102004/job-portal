// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://927304fd27376bec2c0a98b48ad2edf8@o4509003880726528.ingest.us.sentry.io/4509021779197952",

  // Set sampling rate for profiling - this is evaluated only once per SDK.init
  profileSessionSampleRate: 1.0,
  integrations: [Sentry.mongooseIntegration()],
});