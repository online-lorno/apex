import React, { ReactNode } from 'react'

import Navbar from '@components/sections/Navbar'
import Sidebar from '@components/common/Sidebar'

interface Props {
  children?: ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex flex-row">
        <div className="h-screen pt-10">
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
        <div className="container p-4">{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
