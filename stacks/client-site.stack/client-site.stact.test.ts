import { Template } from 'aws-cdk-lib/assertions'
import * as sst from '@serverless-stack/resources'

import ApiStack from '../api.stack'
import ClientSiteStack from './index'

test('Client Site Stack', () => {
  const app = new sst.App()
  // WHEN
  const apiStack = new ApiStack(app, 'api', {
    appName: 'test',
  })
  const stack = new ClientSiteStack(app, 'client-site', {
    appName: 'test',
    apiUrl: apiStack.apiUrl,
  })
  // THEN
  const template = Template.fromStack(stack)

  template.hasOutput('ClientSiteUrl', {})
})
