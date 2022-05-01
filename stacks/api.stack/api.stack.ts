import * as sst from '@serverless-stack/resources'

interface IStackProps extends sst.StackProps {
  appName: string
}

const handlersPath = 'projects/api/handlers'

export default class ApiStack extends sst.Stack {
  public apiUrl: string

  constructor(scope: sst.App, id: string, props: IStackProps) {
    super(scope, id, props)

    const DATABASE = `apex${scope.stage}`

    // Create the Aurora DB cluster
    const cluster = new sst.RDS(this, `cluster-${props.appName}`, {
      engine: 'postgresql10.14',
      defaultDatabaseName: DATABASE,
      // migrations: 'migrations',
      // rdsServerlessCluster: {
      //   backupRetention: cdk.Duration.days(7)
      // }
    })

    // Create a HTTP API
    const api = new sst.Api(this, `api-${props.appName}`, {
      defaults: {
        function: {
          environment: {
            DATABASE,
            CLUSTER_ARN: cluster.clusterArn,
            SECRET_ARN: cluster.secretArn,
          },
          permissions: [cluster],
        },
      },
      routes: {
        'GET /admin': `${handlersPath}/admin/root/root.handler`,
        'GET /client': `${handlersPath}/client/root/root.handler`,
      },
    })
    this.apiUrl = api.url

    // Show the endpoint in the output
    this.addOutputs({
      ApiEndpoint: api.url,
      SecretArn: cluster.secretArn,
      ClusterIdentifier: cluster.clusterIdentifier,
    })
  }
}
