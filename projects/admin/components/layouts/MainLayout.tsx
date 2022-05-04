import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'

import Navbar from '@components/sections/Navbar'
import Sidebar from '@components/common/Sidebar'
import sidebarConstant from '@constants/sidebar'

interface Props {
  children?: ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const key = router.asPath === '/' ? 'brokerage' : router.asPath.split('/')[1]

  return (
    <div className="relative">
      <Navbar />
      <div className="flex flex-row">
        <div className="h-screen pt-16">
          <Sidebar menuItems={sidebarConstant[key] ?? []} />
        </div>
        <div className="container pt-16">{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
