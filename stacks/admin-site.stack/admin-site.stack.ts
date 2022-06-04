import { StackContext, use, NextjsSite } from '@serverless-stack/resources'

import { Api } from '../api.stack'

export function AdminSite({ stack }: StackContext) {
  const api = use(Api)
  const site = new NextjsSite(stack, 'site', {
    path: 'projects/admin',
    environment: {
      NODE_API_URL: api.url,
    },
  })

  stack.addOutputs({
    SITE_URL: site.url,
  })

  return site
}
