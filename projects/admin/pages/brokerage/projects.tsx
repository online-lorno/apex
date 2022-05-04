import React from 'react'

import Button from '@components/common/Button'
import MaterialIcon from '@components/common/MaterialIcon'
import Link from 'next/link'

const Projects = () => {
  return (
    <>
      <div className="w-full py-4 px-8 bg-white border-b border-neutral-50 drop-shadow flex justify-between">
        <div className="flex flex-col">
          <p className="text-gray-700 font-medium mb-1">Properties</p>
          <p className="text-gray-400 text-xs">
            Browser and select various properties ranging from private to
            developer projects
          </p>
        </div>
        <Button text="Add" type="success" />
      </div>
      <div className="w-full px-8 pt-8 border-b border-gray-200 flex space-x-8">
        <Link href="/brokerage/private" passHref>
          <a className="flex items-center w-64 bg-transparent p-4 rounded-tl rounded-tr border-b-2 border-transparent group hover:bg-blue-100 hover:border-blue-700">
            <MaterialIcon
              icon="DomainOutlined"
              classNames="h-6 w-6 text-black mr-2 group-hover:text-blue-600"
            />
            <div className="flex flex-col">
              <p className="text-sm text-gray-900 font-medium group-hover:text-blue-800">
                Private
              </p>
              <p className="text-sm text-gray-400 group-hover:text-blue-500">
                Browse private properties
              </p>
            </div>
          </a>
        </Link>
        <a className="flex items-center w-64 bg-blue-100 p-4 rounded-tl rounded-tr border-b-2 border-blue-700 group hover:bg-blue-100 hover:border-blue-700">
          <MaterialIcon
            icon="HomeOutlined"
            classNames="h-6 w-6 text-blue-600 mr-2 group-hover:text-blue-600"
          />
          <div className="flex flex-col">
            <p className="text-sm text-blue-800 font-medium group-hover:text-blue-800">
              Projects
            </p>
            <p className="text-sm text-blue-500 group-hover:text-blue-500">
              Browse developer projects
            </p>
          </div>
        </a>
      </div>
    </>
  )
}

export default Projects
