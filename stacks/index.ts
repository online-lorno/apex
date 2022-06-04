import { App } from '@serverless-stack/resources'

import { Api } from './api.stack'
import { Database } from './database.stack'
import { AdminSite } from './admin-site.stack'
import { ClientSite } from './client-site.stack'

export default function main(app: App) {
  app.setDefaultFunctionProps({
    runtime: 'nodejs14.x',
    srcPath: 'src/backend',
  })
  app
    .stack(Database)
    .stack(Api)
    .stack(AdminSite)
    .stack(ClientSite)
}
