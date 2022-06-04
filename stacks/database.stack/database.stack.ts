import { RDS, StackContext } from '@serverless-stack/resources'
// import { Duration } from 'aws-cdk-lib'

export function Database({ app, stack }: StackContext) {
  const DATABASE = `apex${app.stage}`
  const rds = new RDS(stack, 'rds', {
    engine: 'postgresql10.14',
    defaultDatabaseName: DATABASE,
    migrations: 'src/backend/migrations',
    // cdk: {
    //   cluster: {
    //     backupRetention: Duration.days(5)
    //   }
    // }
  })

  return rds
}
