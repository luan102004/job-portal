// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://fda195261ab28b19465e2d26b1de16df@o4509003880726528.ingest.us.sentry.io/4509008243589120",
  integrations: [Sentry.mongooseIntegration()],
});

