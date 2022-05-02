import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'

import MaterialIcon from '@components/common/MaterialIcon'

const navigation = [
  { name: 'Brokerage', href: '/' },
  { name: 'Report', href: '/report' },
  { name: 'Settings', href: '/settings' },
  { name: 'Billing', href: '/billing' },
  { name: 'Components', href: '/components' },
]

const Navbar = () => {
  const router = useRouter()

  return (
    <Disclosure as="nav" className="bg-blue-900 fixed top-0 left-0 w-full z-10">
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-lime-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <MaterialIcon
                      icon="CloseOutlined"
                      classNames="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <MaterialIcon
                      icon="MenuOutlined"
                      classNames="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a className="text-xl text-lime-300 font-bold uppercase tracking-widest">
                      Apex
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex sm:space-x-2 lg:space-x-4">
                    {navigation.map((item) => {
                      const current =
                        (item.href === '/' && router.asPath === '/') ||
                        item.href === router.asPath
                      return (
                        <Link href={item.href} key={item.name}>
                          <a
                            className={clsx(
                              {
                                'bg-lime-400 text-black': current,
                              },
                              {
                                'text-white hover:text-lime-400': !current,
                              },
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <MaterialIcon
                    icon="NotificationsNoneOutlined"
                    classNames="h-4 w-4"
                    aria-hidden="true"
                  />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-2 lg:ml-6 relative">
                  <div>
                    <Menu.Button className="flex items-center text-sm">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        height={24}
                        width={24}
                        alt=""
                      />
                      <span className="text-white font-medium ml-2 hidden lg:block">
                        John Doesser
                      </span>
                      <MaterialIcon
                        icon="ExpandMoreOutlined"
                        classNames="h-4 w-4 ml-2 text-white hidden lg:block"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              {
                                'bg-gray-100': active,
                              },
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              {
                                'bg-gray-100': active,
                              },
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              {
                                'bg-gray-100': active,
                              },
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const current =
                  (item.href === '/' && router.asPath === '/') ||
                  item.href === router.asPath
                return (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={clsx(
                      {
                        'bg-lime-400 text-black': current,
                      },
                      {
                        'text-white hover:text-lime-400': !current,
                      },
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                )
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
