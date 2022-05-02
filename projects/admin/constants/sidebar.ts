import { MenuItemProps } from '@components/common/Sidebar'

interface Props {
  [key: string]: MenuItemProps[]
}

const sidebar: Props = {
  brokerage: [
    {
      title: 'Dashboard',
      icon: 'DashboardOutlined',
      link: '/',
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
          link: '/brokerage/private',
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
    {
      title: 'Accounting',
      icon: 'SsidChartOutlined',
    },
    {
      title: 'Address Book',
      icon: 'BookOutlined',
    },
    {
      title: 'Administration',
      icon: 'AutoAwesomeOutlined',
    },
    {
      title: 'Lead Tools',
      icon: 'QrCodeOutlined',
    },
  ],
  report: [],
  settings: [],
  billing: [],
}

export default sidebar
