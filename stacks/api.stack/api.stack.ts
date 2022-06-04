import {
  StackContext,
  use,
  Api as ApiGateway,
} from '@serverless-stack/resources'

import { Database } from '../database.stack'

export function Api({ stack }: StackContext) {
  // handler path is set like due to file
  // stacks/index.ts srcPath is set to src/backend already
  const handlersPath = 'lambdas'
  const rds = use(Database)
  const api = new ApiGateway(stack, 'api', {
    defaults: {
      function: {
        environment: {
          RDS_DATABASE: rds.defaultDatabaseName,
          RDS_ARN: rds.clusterArn,
          RDS_SECRET_ARN: rds.secretArn,
        },
        permissions: [rds],
      },
    },
    routes: {
      'GET /admin': `${handlersPath}/admin/root/root.handler`,
      'GET /client': `${handlersPath}/client/root/root.handler`,
    },
  })

  stack.addOutputs({
    API_URL: api.url,
  })

  return api
}
