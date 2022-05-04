import type { NextPage } from 'next'
import Head from 'next/head'

import Button from '@components/common/Button'
import HeroIcon from '@components/common/HeroIcon'
import MaterialIcon from '@components/common/MaterialIcon'
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

      <>
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
            <Pill
              text="Available"
              icon={<MaterialIcon icon="DashboardOutlined" />}
              transparent
            />
            <Pill
              text="Available"
              icon={<MaterialIcon icon="DashboardOutlined" />}
            />
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
          <div className="flex items-center space-x-1">
            <Button text="Default" icon={<HeroIcon icon="SaveIcon" />} />
            <Button text="Success" type="success" />
            <Button
              classNames="py-2 px-2"
              icon={<HeroIcon icon="SaveIcon" />}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="mb-4">
          <h1 className="uppercase">Sidebar</h1>
          <div className="h-96">
            <Sidebar
              menuItems={[
                {
                  title: 'Dashboard',
                  icon: 'DashboardOutlined',
                },
                {
                  title: 'Sales Leads',
                  icon: 'CleanHandsOutlined',
                },
                {
                  title: 'Comissions',
                  icon: 'MonetizationOnOutlined',
                  badgeText: '4',
                  menuItems: [
                    {
                      title: 'Comissions 1',
                    },
                    {
                      title: 'Comissions 2',
                    },
                    {
                      title: 'Comissions 3',
                    },
                  ],
                },
                {
                  title: 'Properties',
                  icon: 'HomeWorkOutlined',
                  badgeText: '10',
                  menuItems: [
                    {
                      title: 'Private',
                    },
                    {
                      title: 'Projects',
                    },
                  ],
                },
                {
                  title: 'Developers',
                  icon: 'HouseSidingOutlined',
                },
              ]}
            />
          </div>
        </div>
      </>
    </>
  )
}

export default Components
