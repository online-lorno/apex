import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

import MaterialIcon, { MaterialIconName } from '@components/common/MaterialIcon'
import Pill from '@components/common/Pill'
import kebabCase from '@utils/string/kebab-case'

export interface MenuItemProps {
  title: string
  icon?: MaterialIconName
  badgeText?: string
  link?: string
  child?: boolean
  menuItems?: MenuItemProps[]
}

interface SidebarProps {
  menuItems: MenuItemProps[]
  classNames?: string
}

const menuItemContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const menuItemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  icon,
  badgeText,
  link,
  menuItems = [],
}) => {
  const router = useRouter()
  const active =
    (link && router.asPath === link) ||
    menuItems.some((item) => router.asPath === item.link)
  const [isOpen, setIsOpen] = useState(active)

  const menuItemAnchor = (
    <a
      className="flex justify-between items-center cursor-pointer py-2 group"
      onClick={() => {
        if (menuItems.length) {
          setIsOpen(!isOpen)
        }
      }}
    >
      <div className="flex justify-start">
        {icon && (
          <MaterialIcon
            icon={icon}
            classNames={clsx(
              {
                'text-blue-700': active,
              },
              {
                'text-gray-500': !active,
              },
              'w-5 h-5 mr-1.5 group-hover:text-blue-700'
            )}
          />
        )}
        <span
          className={clsx(
            {
              'text-blue-700': active,
            },
            {
              'text-gray-500': !active,
            },
            'group-hover:text-blue-700'
          )}
        >
          {title}
        </span>
      </div>
      <div className="flex justify-end items-center">
        {badgeText && (
          <Pill
            text={badgeText}
            classNames={clsx(
              {
                'bg-gray-900 text-lime-400': active,
              },
              {
                'bg-gray-300 text-gray-50': !active,
              },
              'w-8 h-6 px-0 py-0 flex justify-center items-center group-hover:bg-gray-900 group-hover:text-lime-400'
            )}
          />
        )}
        {!!menuItems.length && (
          <MaterialIcon
            icon={isOpen ? 'ExpandLessOutlined' : 'ExpandMoreOutlined'}
            classNames={clsx(
              {
                'text-blue-700': active,
              },
              {
                'text-gray-500': !active,
              },
              'w-5 h-5 ml-1 group-hover:text-blue-700'
            )}
          />
        )}
      </div>
    </a>
  )
  const menuteItemChildItems = (
    <AnimatePresence>
      {!!menuItems.length && isOpen && (
        <motion.div
          variants={menuItemContainerVariants}
          initial="hidden"
          animate="show"
        >
          {menuItems.map((item, index) => {
            const menuItemActive = item?.link && router.asPath === item.link

            if (item?.link) {
              return (
                <Link
                  href={item?.link}
                  passHref
                  key={kebabCase(`${item.title}-${index}`)}
                >
                  <motion.a
                    className={clsx(
                      {
                        'bg-gray-100': menuItemActive,
                      },
                      'flex items-center cursor-pointer py-2 px-8 rounded hover:bg-gray-100 group'
                    )}
                    variants={menuItemVariants}
                  >
                    <span
                      className={clsx(
                        {
                          'text-blue-600': menuItemActive,
                        },
                        {
                          'text-gray-500': !menuItemActive,
                        },
                        'text-sm group-hover:text-blue-600'
                      )}
                    >
                      {item.title}
                    </span>
                  </motion.a>
                </Link>
              )
            }

            return (
              <motion.a
                className={clsx(
                  {
                    'bg-gray-100': menuItemActive,
                  },
                  'flex items-center cursor-pointer py-2 px-8 rounded hover:bg-gray-100 group'
                )}
                key={kebabCase(`${item.title}-${index}`)}
                variants={menuItemVariants}
              >
                <span
                  className={clsx(
                    {
                      'text-blue-600': menuItemActive,
                    },
                    {
                      'text-gray-500': !menuItemActive,
                    },
                    'text-sm group-hover:text-blue-600'
                  )}
                >
                  {item.title}
                </span>
              </motion.a>
            )
          })}
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      {link && (
        <>
          <Link href={link} passHref>
            {menuItemAnchor}
          </Link>
          {menuteItemChildItems}
        </>
      )}
      {!link && (
        <>
          {menuItemAnchor}
          {menuteItemChildItems}
        </>
      )}
    </>
  )
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, classNames = '' }) => {
  return (
    <div
      className={clsx(
        'w-64 h-full overflow-y-auto bg-white border border-gray-50 drop-shadow pt-4 px-6 overflow-auto',
        classNames
      )}
    >
      {!!menuItems.length &&
        menuItems.map((menuItem, key) => <MenuItem key={key} {...menuItem} />)}
    </div>
  )
}

export default Sidebar
