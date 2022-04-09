import type { NextPage } from 'next'
import Head from 'next/head'
import { TagIcon } from '@heroicons/react/outline'
import { SaveIcon } from '@heroicons/react/outline'

import Button from '@components/common/Button'
import Loader from '@components/common/Loader'
import Pill from '@components/common/Pill'
import Sidebar from '@components/common/Sidebar'

const Components: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apex Admin - Components</title>
        <meta name="description" content="Apex Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto pt-4">
        {/* Pill Labels */}
        <div className="mb-4">
          <h1 className="uppercase">Pill Labels</h1>
          <div className="flex items-center">
            <Pill
              text="Available"
              icon={<TagIcon className="w-4 h-4 mr-0.5" />}
              transparent
            />
            <Pill
              text="Available"
              icon={<TagIcon className="w-4 h-4 mr-0.5" />}
            />
            <Pill text="Available" type="info" />
            <Pill text="Sold" type="success" />
          </div>
        </div>

        {/* Loaders */}
        <div className="mb-4">
          <h1 className="uppercase">Loaders</h1>
          <div className="flex items-center">
            <div className="w-24 mr-1">
              <Loader />
            </div>
            <Pill
              text="Start Price"
              icon={<TagIcon className="w-4 h-4 mr-0.5" />}
              content={<Loader />}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mb-4">
          <h1 className="uppercase">Buttons</h1>
          <div className="flex items-center">
            <Button
              classNames="mr-1"
              text="Default"
              icon={<SaveIcon className="w-6 h-6 mr-1" />}
            />
            <Button text="Success" type="success" />
          </div>
        </div>

        {/* Sidebar */}
        <div className="mb-4">
          <h1 className="uppercase">Sidebar</h1>
          <div className="h-96">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  )
}

export default Components
