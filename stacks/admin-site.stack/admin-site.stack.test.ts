import { Template } from 'aws-cdk-lib/assertions'
import * as sst from '@serverless-stack/resources'

import ApiStack from '../api.stack'
import AdminSiteStack from './index'

test('Admin Site Stack', () => {
  const app = new sst.App()
  // WHEN
  const apiStack = new ApiStack(app, 'api', {
    appName: 'test',
  })
  const stack = new AdminSiteStack(app, 'admin-site', {
    appName: 'test',
    apiUrl: apiStack.apiUrl,
  })
  // THEN
  const template = Template.fromStack(stack)

  template.hasOutput('AdminSiteUrl', {})
})
