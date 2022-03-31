import { Template } from 'aws-cdk-lib/assertions';
import * as sst from '@serverless-stack/resources';

import ApiStack from './index';

test('Api Stack', () => {
  const app = new sst.App();
  // WHEN
  const stack = new ApiStack(app, 'api', {
    appName: 'test',
  });
  // THEN
  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::Lambda::Function', 2);
});
