import * as sst from '@serverless-stack/resources';

interface IStackProps extends sst.StackProps {
  appName: string;
}

const handlersPath = 'projects/api/handlers';

export default class ApiStack extends sst.Stack {
  public apiUrl: string;

  constructor(scope: sst.App, id: string, props: IStackProps) {
    super(scope, id, props);

    // Create a HTTP API
    const api = new sst.Api(this, `api-${props.appName}`, {
      routes: {
        'GET /admin': `${handlersPath}/admin/root/root.handler`,
        'GET /client': `${handlersPath}/client/root/root.handler`,
      },
    });
    this.apiUrl = api.url;

    // Show the endpoint in the output
    this.addOutputs({
      ApiEndpoint: api.url,
    });
  }
}
