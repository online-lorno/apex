import React, { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  text: string
  icon?: ReactNode
  transparent?: boolean
  type?: 'info' | 'success'
  content?: ReactNode
  classNames?: string
}

const Pill: React.FC<Props> = ({
  text,
  icon,
  transparent = false,
  type,
  content,
  classNames = '',
}) => {
  return (
    <div
      className={clsx(
        'py-1',
        'pl-2.5',
        'pr-2',
        'text-xs',
        'inline-flex',
        'flex-col',
        'rounded-lg',
        'text-gray-600',
        {
          'bg-gray-100': !type && !transparent,
        },
        {
          'font-bold': type !== undefined,
        },
        {
          'bg-blue-100': type && type === 'info',
          'text-blue-600': type && type === 'info',
        },
        {
          'bg-lime-200': type && type === 'success',
          'text-lime-600': type && type === 'success',
        },
        classNames
      )}
    >
      <div className="flex justify-around content-center">
        {icon}
        {text}
      </div>
      {content && (
        <div className="flex justify-around content-center py-2">{content}</div>
      )}
    </div>
  )
}

export default Pill
