import type { NextPage } from 'next'
import Head from 'next/head'

import Button from '@components/common/Button'
import HeroIcon from '@components/common/HeroIcon'
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
              icon={<HeroIcon icon="TagIcon" />}
              transparent
            />
            <Pill text="Available" icon={<HeroIcon icon="TagIcon" />} />
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
              icon={<HeroIcon icon="TagIcon" />}
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
              icon={<HeroIcon icon="SaveIcon" />}
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
