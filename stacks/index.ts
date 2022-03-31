import * as sst from '@serverless-stack/resources';

import ApiStack from './api.stack';

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: 'nodejs14.x',
  });

  // Set base app name
  const appName = `${app.stage}-${app.name}`;

  // Stacks, add more if needed
  const apiStack = new ApiStack(app, 'api', {
    appName,
  });
}
