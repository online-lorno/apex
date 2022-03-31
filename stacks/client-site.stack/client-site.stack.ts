import * as sst from '@serverless-stack/resources';

interface IStackProps extends sst.StackProps {
  appName: string;
  apiUrl: string;
}

export default class ClientSiteStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props: IStackProps) {
    super(scope, id, props);

    // Create Next.js site
    const site = new sst.NextjsSite(this, `site-client-${props.appName}`, {
      path: 'projects/client',
      environment: {
        NODE_API_URL: props.apiUrl,
      },
    });

    // Show the endpoint in the output
    this.addOutputs({
      ClientSiteUrl: site.url,
    });
  }
}
